import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from '../../../services/exam.service';
import { Exam } from '../../../models/examDTO';
import { ExamResponse } from '../../../models/examResponseDTO';
import { Subject } from '../../../models/subjectDTO';
import { StudentService } from '../../../services/student.service';
import { StudentResponse } from '../../../models/studentResponseDTO';

@Component({
  selector: 'app-inserta-examen',
  templateUrl: './inserta-examen.component.html',
  styleUrl: './inserta-examen.component.css'
})
export class InsertaExamenComponent {

  id: number = 0;
  arrStudents : StudentResponse[] = []

  constructor(private location: Location, private route: ActivatedRoute,
    private examService: ExamService, private studentService: StudentService
  ){
    const idParam = this.route.snapshot.paramMap.get('idMateria');
    this.id = idParam ? +idParam : 1
    this.getAllStudents()
  }

  goBack(): void {
    this.location.back();
  }

  getAllStudents(){
    this.studentService.getAllStudentInSubject(this.id).subscribe((data) => {
      this.arrStudents = data
      console.log(data)
    })
  }

  onSubmit(f: NgForm){
    const s = new Subject(this.id)

    const e = new Exam()
    e.description = f.value.desc
    e.themes = f.value.tema
    e.date = f.value.fecha
    e.hour = f.value.hora
    e.subject = s;

    this.examService.createExam(e).subscribe((data) => { 
      console.log(data); 
      this.examService.addStudentsToExam(data.idExam,this.arrStudents).subscribe()
      this.goBack()
      })
  }
}


