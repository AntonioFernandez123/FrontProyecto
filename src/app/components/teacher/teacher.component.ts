import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GradeService } from '../../services/grade.service';
import { SubjectService } from '../../services/subject.service';
import { TeacherService } from '../../services/teacher.service';
import { Subject } from '../../models/subjectDTO';
import { Grade } from '../../models/gradeDTO';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent {

  id: number = 0;
  arrGrade:Grade[]=[]

  constructor(public teacherService: TeacherService,public gradeService: GradeService, 
    public subjectService:SubjectService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam ? +idParam : 1
    this.getTeacherById();
    this.updateList()
  }

  getTeacherById(){
    this.teacherService.getTeacherById(this.id).subscribe((data) => { console.log(data)})
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
