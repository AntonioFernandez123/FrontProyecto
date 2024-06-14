import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/studentDTO';
import { Subject } from '../../models/subjectDTO';
import { SubjectService } from '../../services/subject.service';
import { ExamService } from '../../services/exam.service';
import { Exam } from '../../models/examDTO';
import { Exam_Student } from '../../models/Exam_Student';
import { Role } from '../../models/role';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  idStudent: number = 0;
  student: Student = new Student();
  subjects: Subject[] = [];

  constructor(private route: ActivatedRoute, private studentService: StudentService,
    private subjectService: SubjectService, private examService: ExamService, private router:Router){}

  ngOnInit(): void {

    let idParam = this.route.snapshot.paramMap.get('idAlumno');

    const user = sessionStorage.getItem('user');
    const json = JSON.parse(user != null ? user : "{}")
    if( json.role?.toString() == "STUDENT"){
      if (json.token != idParam){
        this.router.navigate(["student/"+ json.token])
        idParam = json.token;
      }
    }else{
      this.router.navigate([""])
    }

    this.idStudent = idParam ? +idParam : 1
    this.getStudentById()
    this.updateList()

  }

  getStudentById(){
    this.studentService.getStudentById(this.idStudent).subscribe((data) => {
       console.log(data)
        this.student = data
      })
  }

  cerrarSesion(){
    sessionStorage.removeItem('user')
    this.router.navigate([""])
  }

  updateList(){
    this.subjectService.getAllSubjectsWithStudentId(this.idStudent).subscribe((data) => {
      this.subjects = data

      for (const subject of this.subjects) {
      
        this.examService.getAllExamsByIdStudent(this.idStudent).subscribe((data:Exam_Student[] ) => {
          
          subject.exam = data.filter(a => a.exam?.subject?.idSubject === subject.idSubject)
          console.log(subject.exam)

        })
      }
    })
  }
}
