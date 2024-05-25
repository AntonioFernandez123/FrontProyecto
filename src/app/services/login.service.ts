import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authRequest } from '../models/authRequestDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "http://localhost:8081/api/auth/login";

  constructor(private http: HttpClient) { }

  login (user: authRequest): Observable<any> {
    return this.http.post(this.url, user)
    
  }

}
