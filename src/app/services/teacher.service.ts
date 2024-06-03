import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../models/teacherDTO';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private url = "http://localhost:8081/api/teacher";
  arrTeacher:Teacher[]=[]

  constructor(private http: HttpClient) {}

  getAllTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.url}/getAllTeachers`)
  }

  getTeacherById(idTeacher: number): Observable<Teacher> {
    return this.http.get<Teacher>(`${this.url}/getTeacherById`, {params: {idTeacher: idTeacher.toString()}})
  }

  createTeacher(teacher: Teacher): Observable<void>{
    return this.http.post<void>(`${this.url}/createTeacher`, teacher)
  }
  
  updateTeacher(teacher: Teacher): Observable<void>{
    return this.http.put<void>(`${this.url}/updateTeacher`, teacher)
  }

  deleteTeacher(idTeacher: number): Observable<void>{
    return this.http.delete<void>(`${this.url}/deleteTeacher`, {params: {idTeacher: idTeacher.toString()}})
  } 
}
