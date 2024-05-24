import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  nomUsuario !: string;
  password !: string;

  constructor(public service: LoginService){}
    login(){
      const user = {userName: this.nomUsuario, password:this.password};
      this.service.login(user).subscribe((data) => {console.log(data);})
    }

  onSubmit(loginForm : NgForm){
    console.log(this.nomUsuario);
    console.log(this.password);
  }

}