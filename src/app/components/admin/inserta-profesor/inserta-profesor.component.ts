import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from '../../../services/teacher.service';
import { Teacher } from '../../../models/teacherDTO';
import { Role } from '../../../models/role';

@Component({
  selector: 'app-inserta-profesor',
  templateUrl: './inserta-profesor.component.html',
  styleUrl: './inserta-profesor.component.css'
})
export class InsertaProfesorComponent {

  constructor(private router:Router, public service: TeacherService){}

  onSubmit(f: NgForm){
    const t: Teacher = new Teacher();
    t.name = f.value.nombre
    t.lastName = f.value.apellido
    t.email = f.value.email
    t.dni = f.value.dni
    t.userName = f.value.userName
    t.password = f.value.password
    t.role = Role.TEACHER

    this.service.createTeacher(t).subscribe((data) => { console.log(data); this.router.navigate(['/admin'])})
    
  }
  
}
