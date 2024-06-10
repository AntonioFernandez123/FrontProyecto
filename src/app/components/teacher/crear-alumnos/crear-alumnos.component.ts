import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentResponse } from '../../../models/studentResponseDTO';
import { Role } from '../../../models/role';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-crear-alumnos',
  templateUrl: './crear-alumnos.component.html',
  styleUrl: './crear-alumnos.component.css'
})
export class CrearAlumnosComponent {

  file:File|null = null;

  constructor(private location: Location, private studentService: StudentService){}

  goBack(): void {
    this.location.back();
  }

  onSubmit(f: NgForm){
    const s = new StudentResponse()
    s.name = f.value.nombre
    s.lastName = f.value.apellido
    s.dni = f.value.dni
    s.email = f.value.email
    s.userName = f.value.userName
    s.password = f.value.pass
    s.role = Role.STUDENT

     this.studentService.createStudent(s).subscribe((data) => { console.log(data); this.goBack()})
  }

  onFileChange(event:any){
    if(event.target.files.length > 0){
      this.file = event.target.files[0]
    }
  }

  onSubmitCSV(f: NgForm){
    if ( this.file){
      this.studentService.createStudentCSV(this.file).subscribe(() => this.goBack())
    }
  }
}
