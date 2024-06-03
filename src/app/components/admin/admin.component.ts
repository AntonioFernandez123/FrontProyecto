import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  constructor(public service: TeacherService, private router: Router){}

  ngOnInit(): void {
    this.updateList()
  }

  deleteTeacher(idUser: number){
    const confirm = window.confirm('Estas apunto de BORRAR al Profesor. Estas seguro?')
    if(confirm){
      this.service.deleteTeacher(idUser).subscribe(() => {
        this.updateList();
      })
    }
  }

  updateList(){
    this.service.getAllTeachers().subscribe(res => {
      this.service.arrTeacher = res
    })
  }

}
