import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exam } from '../models/examDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private url = "http://localhost:8081/api/exam";
  arrExam:Exam[]=[]

  constructor(private http: HttpClient) {}

  getAllExams(): Observable<Exam[]> {
    return this.http.get<Exam[]>(`${this.url}/getAllExams`)
  }

  getExamById(idExam: number): Observable<Exam> {
    return this.http.get<Exam>(`${this.url}/getExamById`, {params: {idExam: idExam.toString()}})
  }

  createExam(exam: Exam): Observable<void>{
    return this.http.post<void>(`${this.url}/createExam`, exam)
  }
  
  updateExam(exam: Exam): Observable<void>{
    return this.http.put<void>(`${this.url}/updateExam`, exam)
  }

  deleteExam(idExam: number): Observable<void>{
    return this.http.delete<void>(`${this.url}/deleteExam`, {params: {idExam: idExam.toString()}})
  } 

  getAllExamsByIdSubject(idSubject: number): Observable<Exam[]>{
    return this.http.get<Exam[]>(`${this.url}/getAllExamsByIdSubject`, {params: {idSubject: idSubject.toString()}})
  }
}
