import { Component, OnInit } from '@angular/core';
import { Exam_Student } from '../../../models/Exam_Student';
import { ExamService } from '../../../services/exam.service';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-ver-examen',
  templateUrl: './ver-examen.component.html',
  styleUrl: './ver-examen.component.css'
})
export class VerExamenComponent implements OnInit {

  idExam: number = 0
  arrExam_Student: Exam_Student[] = []

  constructor(private examService: ExamService,private route: ActivatedRoute,
    private studentService: StudentService){
    
  }

  ngOnInit(){

    const idMateria = this.route.snapshot.paramMap.get('idExamen');
    this.idExam = idMateria ? +idMateria : 1

    this.examService.getAllStudentWithNote().subscribe((data) => {
      this.arrExam_Student = data.filter(examStudent => examStudent.exam!.idExam === this.idExam)
      console.log(this.arrExam_Student)
    })
  }

  exportarNotas(){
    this.studentService.findAllWithIdExam(this.idExam).subscribe(blob =>{
      const a = document.createElement("a")
      const objectUrl = URL.createObjectURL(blob)
      a.href = objectUrl
      a.download = 'notas.csv'
      a.click()
      URL.revokeObjectURL(objectUrl)
    })
  }
  


}
