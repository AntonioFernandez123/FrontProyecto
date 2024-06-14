import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../../services/student.service';
import { Student } from '../../../models/studentDTO';
import { ExamResponse } from '../../../models/examResponseDTO';
import { Subject } from '../../../models/subjectDTO';
import { ExamService } from '../../../services/exam.service';
import { Exam } from '../../../models/examDTO';

@Component({
  selector: 'app-modifica-examen',
  templateUrl: './modifica-examen.component.html',
  styleUrl: './modifica-examen.component.css'
})
export class ModificaExamenComponent {

  idExam:number = 0;
  idSubject:number = 0;
  students: Student[] = [];

  constructor(private location: Location, private route: ActivatedRoute,
    private studentService: StudentService, private examService: ExamService
  ){
    const idExamen = this.route.snapshot.paramMap.get('idExamen');
    this.idExam = idExamen ? +idExamen : 1

    const idSubject = this.route.snapshot.paramMap.get('idMateria');
    this.idSubject = idSubject ? +idSubject : 1
  }

  loadStudent(){
    this.studentService.getAllStudentInSubject(this.idSubject).subscribe((data) => this.students = data)
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(f: NgForm){
    const s: Subject = new Subject();
    s.idSubject = this.idSubject

    const e: Exam = new Exam()
    e.idExam = this.idExam
    e.description = f.value.desc
    e.themes = f.value.tema
    e.date = f.value.fecha
    e.hour = f.value.hora
    e.subject = s

    this.examService.updateExam(e).subscribe(() =>{
      // this.examService.addStudentsToExam(this.idExam,this.students).subscribe()
      // this.goBack()
    })
  }

}
