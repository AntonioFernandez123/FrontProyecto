import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GradeService } from '../../services/grade.service';
import { SubjectService } from '../../services/subject.service';
import { TeacherService } from '../../services/teacher.service';
import { Subject } from '../../models/subjectDTO';
import { Grade } from '../../models/gradeDTO';
import { Teacher } from '../../models/teacherDTO';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent {

  id: number = 0;
  arrGrade:Grade[]=[]
  teacher:Teacher = new Teacher();

  constructor(public teacherService: TeacherService,public gradeService: GradeService, 
    public subjectService:SubjectService, private route: ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    let idParam = this.route.snapshot.paramMap.get('id');

    const user = sessionStorage.getItem('user');
    const json = JSON.parse(user != null ? user : "{}")
    if( json.role?.toString() == "TEACHER"){
      if (json.token != idParam){
        this.router.navigate(["teacher/"+ json.token])
        idParam = json.token;
      }
    }else{
      this.router.navigate([""])
    }

    this.id = idParam ? +idParam : 1
    this.getTeacherById();
    this.updateList()
  }

  getTeacherById(){
    this.teacherService.getTeacherById(this.id).subscribe((data) => {
       console.log(data)
        this.teacher = data
      })
  }

  updateList(){
    this.gradeService.getAllGradesWithTeacherId(this.id).subscribe(res => {
      this.arrGrade = res

      for (const grade of this.arrGrade) {
        
        this.subjectService.getAllSubjectsWithTeacherAndGradeId(this.id, grade.idGrade).subscribe(res => {
          grade.subjects = res
        })
      }
    })
  }

  cerrarSesion(){
    sessionStorage.removeItem('user')
    this.router.navigate([""])
  }

  deleteCurso(idGrade: number){
    const confirm = window.confirm('Estas apunto de BORRAR el Curso. Estas seguro?')
    if(confirm){
      this.gradeService.deleteGrade(idGrade).subscribe(() => {
        this.updateList();
      })
    }
  }

  deleteMateria(idSubject: number){
    const confirm = window.confirm('Estas apunto de BORRAR la Materia. Estas seguro?')
    if(confirm){
      this.subjectService.deleteSubject(idSubject).subscribe(() => {
        this.updateList();
      })
    }
  }

}
