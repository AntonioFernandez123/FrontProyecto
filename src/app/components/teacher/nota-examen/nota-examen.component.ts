import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Exam_Student } from '../../../models/Exam_Student';
import { ActivatedRoute } from '@angular/router';
import { ExamResponse } from '../../../models/examResponseDTO';
import { StudentResponse } from '../../../models/studentResponseDTO';
import { ExamService } from '../../../services/exam.service';

@Component({
  selector: 'app-nota-examen',
  templateUrl: './nota-examen.component.html',
  styleUrl: './nota-examen.component.css'
})
export class NotaExamenComponent {

  idExam: number = 0;
  idStudent: number = 0;

  constructor(private location: Location, private route: ActivatedRoute, private examService:ExamService){
    const idExam = this.route.snapshot.paramMap.get('idExamen');
    this.idExam = idExam ? +idExam : 1

    const idStudent = this.route.snapshot.paramMap.get('idAlumno');
    this.idStudent = idStudent ? +idStudent : 1
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(f: NgForm){
    const x:ExamResponse = new ExamResponse(this.idExam)
    const s: StudentResponse = new StudentResponse(this.idStudent)

    const xs: Exam_Student = new Exam_Student();
    xs.exam = x
    xs.student = s
    xs.note = f.value.nota

    this.examService.addNoteToExam(xs).subscribe(()=> {this.goBack()});

  }

}
