import { Injectable } from '@angular/core';
import { Subject } from '../models/subjectDTO';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubjectResponse } from '../models/subjectResponseDTO';
import { Student } from '../models/studentDTO';
import { StudentResponse } from '../models/studentResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private url = "http://localhost:8081/api/subject";
  arrSubjects:Subject[]=[]

  constructor(private http: HttpClient) {}

  getAllSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.url}/getAllSubjects`)
  }

  getSubjectById(idSubject: number): Observable<Subject> {
    return this.http.get<Subject>(`${this.url}/getSubjectById`, {params: {idSubject: idSubject.toString()}})
  }

  createSubject(subject: SubjectResponse): Observable<void>{
    return this.http.post<void>(`${this.url}/createSubject`, subject)
  }
  
  updateSubject(subject: SubjectResponse): Observable<void>{
    return this.http.put<void>(`${this.url}/updateSubject`, subject)
  }

  deleteSubject(idSubject: number): Observable<void>{
    return this.http.delete<void>(`${this.url}/deleteSubject`, {params: {idSubject: idSubject.toString()}})
  } 

  getAllSubjectsWithTeacherAndGradeId(idTeacher: number, idGrade: number): Observable<Subject[]>{
    return this.http.get<Subject[]>(`${this.url}/getAllSubjectsWithTeacherAndGradeId`, {params: {idTeacher: idTeacher.toString(), idGrade: idGrade.toString()}})
  }

  addStudentsToSubject(idSubject: number, students: StudentResponse[]):Observable<void>{
    return this.http.patch<void>(`${this.url}/addStudent?idSubject=${idSubject}`, students)
  }
}
