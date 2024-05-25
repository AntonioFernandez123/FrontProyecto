import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  nomUsuario: string  = '';
  password : string = '';

  constructor(public service: LoginService, private router: Router) { }

  onSubmit(loginForm: NgForm) {
    this.nomUsuario = loginForm.value.nomUsuario;
    this.password = loginForm.value.password;
    console.log(this.nomUsuario);
    console.log(this.password);
    // const user = {nomUsuario: this.nomUsuario, password: this.password}
    // this.service.login(user).subscribe((data) => { console.log(data); })
    this.navega()
  }

  navega(){
    if (this.nomUsuario === 'admin' && this.password === 'admin') {
      this.router.navigate(['admin']);
    }else{
      this.router.navigate(['']);
    }
    
  }
  
    
  
    
  

}