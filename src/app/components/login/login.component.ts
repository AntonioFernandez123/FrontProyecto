import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { TeacherService } from '../../services/teacher.service';
import { User } from '../../models/userDTO';
import { authRequest } from '../../models/authRequestDTO';
import { authResponse } from '../../models/authResponseDTO';
import { Role } from '../../models/role';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  nomUsuario: string = '';
  password: string = '';
  mensaje: string = '';

  constructor(
    public service: LoginService,
    private router: Router,
  ) {}

  onSubmit(loginForm: NgForm) {
    this.nomUsuario = loginForm.value.nomUsuario;
    this.password = loginForm.value.password;

    sessionStorage.setItem('user', JSON.stringify({ role: Role.ADMIN }));

    if (this.nomUsuario === 'admin' && this.password === 'admin') {
      this.router.navigate(['admin']);
    } else {
      const user: authRequest = {
        userName: this.nomUsuario,
        password: this.password,
      };

      this.service.login(user)
      .pipe(catchError(error => {
        this.mensaje = 'Credenciales Incorrectas';
        return error;
      }))
      .subscribe((data:any) => {
        console.log(data);

        sessionStorage.setItem('user', JSON.stringify(data));

        this.navega(data);
      });
    }
  }

  navega(data: authResponse) {
    if (data.role?.toString() === 'TEACHER') {
      this.router.navigate(['teacher/' + data.token]);
      console.log('teacher/' + data.token);
    } else if (data.role?.toString() === 'STUDENT') {
      this.router.navigate(['student/' + data.token]);
      console.log('student/' + data.token);
    }
  }
}
