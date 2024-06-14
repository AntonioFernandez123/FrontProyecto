import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authRequest } from '../models/authRequestDTO';
import { Observable } from 'rxjs';
import { authResponse } from '../models/authResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "http://localhost:8081/api/auth/login";

  constructor(private http: HttpClient) { }

  login (user: authRequest): Observable<authResponse> {
    return this.http.post<authResponse>(this.url, user)
    
  }

}
