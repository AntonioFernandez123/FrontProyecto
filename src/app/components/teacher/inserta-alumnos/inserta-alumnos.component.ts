import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Teacher } from '../../../models/teacherDTO';
import { Role } from '../../../models/role';
import { StudentService } from '../../../services/student.service';
import { Student } from '../../../models/studentDTO';
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

  insertaAlumno(alu: StudentResponse){
    this.students.push(alu);
    this.subjectService.addStudentsToSubject(this.idCurso,this.students).subscribe()
  }


  onSubmit(f: NgForm){
    
  }
}
