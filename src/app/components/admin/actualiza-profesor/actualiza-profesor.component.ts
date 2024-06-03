import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from '../../../services/teacher.service';
import { NgForm } from '@angular/forms';
import { Teacher } from '../../../models/teacherDTO';
import { Role } from '../../../models/role';

@Component({
  selector: 'app-actualiza-profesor',
  templateUrl: './actualiza-profesor.component.html',
  styleUrl: './actualiza-profesor.component.css'
})
export class ActualizaProfesorComponent implements OnInit{

  id: number = 0;

  constructor(private router:Router, private route: ActivatedRoute, public service: TeacherService){}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam ? +idParam : 0
    this.getTeacherById();
  }

  onSubmit(f: NgForm){
    const t: Teacher = new Teacher();
    t.idUser = this.id;
    t.name = f.value.nombre
    t.lastName = f.value.apellido
    t.email = f.value.email
    t.dni = f.value.dni
    t.userName = f.value.userName
    t.password = f.value.password
    t.role = Role.TEACHER

    this.service.updateTeacher(t).subscribe((data) => { console.log(data); this.router.navigate(['/admin'])})

  }

  getTeacherById(){
    this.service.getTeacherById(this.id).subscribe((data) => { console.log(data)})
  }
}
