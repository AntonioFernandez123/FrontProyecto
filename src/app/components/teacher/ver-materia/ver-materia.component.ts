import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../../services/student.service';
import { Student } from '../../../models/studentDTO';
import { Exam } from '../../../models/examDTO';
import { ExamService } from '../../../services/exam.service';
import { SubjectService } from '../../../services/subject.service';
import { Subject } from '../../../models/subjectDTO';

@Component({
  selector: 'app-ver-materia',
  templateUrl: './ver-materia.component.html',
  styleUrl: './ver-materia.component.css'
})
export class VerMateriaComponent {

  id: number = 0;
  arrStudent:Student[]=[]
  arrExam:Exam[] = []
  subject:Subject = new Subject();

  constructor(public studentService: StudentService, private route: ActivatedRoute,
    private examService: ExamService, private subjectService: SubjectService
  ){}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('idMateria');
    this.id = idParam ? +idParam : 1
    this.updateList()
    this.getSubject()
  }

  getSubject(){
    this.subjectService.getSubjectById(this.id).subscribe((data) => {
      this.subject = data
    })
  }

  updateList(){
    this.studentService.getAllStudentInSubject(this.id).subscribe((data) => {
      this.arrStudent = data;
       console.log(data)})

    this.examService.getAllExamsByIdSubject(this.id).subscribe((data) => {
      this.arrExam = data;
       console.log(data)})
  }

}
