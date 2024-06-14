import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../../services/student.service';
import { SubjectService } from '../../../services/subject.service';
import { StudentResponse } from '../../../models/studentResponseDTO';

@Component({
  selector: 'app-inserta-alumnos',
  templateUrl: './inserta-alumnos.component.html',
  styleUrl: './inserta-alumnos.component.css'
})
export class InsertaAlumnosComponent {

  students: StudentResponse[] = []
  idCurso: number = 0;

  constructor(private location: Location, private route: ActivatedRoute, 
    private studentService:StudentService, private subjectService:SubjectService){
      const idParam = this.route.snapshot.paramMap.get('idMateria');
      this.idCurso = idParam ? +idParam : 1
      this.getAllStudents()
    }

  goBack(): void {
    this.location.back();
  }

  getAllStudents(){
    this.studentService.getAllStudents().subscribe((res) => {this.students = res, console.log(res)});
  }

  insertaAlumno(idAlu: number){
    this.studentService.getStudentById(idAlu).subscribe((data) => {
      this.subjectService.addStudentsToSubject(this.idCurso,[data]).subscribe()
    })
    
  }
}
