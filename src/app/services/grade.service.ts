import { Injectable } from '@angular/core';
import { Grade } from '../models/gradeDTO';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  private url = "http://localhost:8081/api/grade";
  arrGrades:Grade[]=[]

  constructor(private http: HttpClient) {}

  getAllGrades(): Observable<Grade[]> {
    return this.http.get<Grade[]>(`${this.url}/getAllGrades`)
  }

  getGradeById(idGrade: number): Observable<Grade> {
    return this.http.get<Grade>(`${this.url}/getGradeById`, {params: {idGrade: idGrade.toString()}})
  }

  createGrade(grade: Grade): Observable<void>{
    return this.http.post<void>(`${this.url}/createGrade`, grade)
  }
  
  updateGrade(grade: Grade): Observable<void>{
    return this.http.put<void>(`${this.url}/updateGrade`, grade)
  }

  deleteGrade(idGrade: number): Observable<void>{
    return this.http.delete<void>(`${this.url}/deleteGrade`, {params: {idGrade: idGrade.toString()}})
  } 

  getAllGradesWithTeacherId(idTeacher: number): Observable<Grade[]>{
    return this.http.get<Grade[]>(`${this.url}/getAllGradesWithTeacherId`, {params: {idTeacher: idTeacher.toString()}})
  }
}
