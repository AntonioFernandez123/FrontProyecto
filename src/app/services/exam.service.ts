import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exam } from '../models/examDTO';
import { Observable } from 'rxjs';
import { StudentResponse } from '../models/studentResponseDTO';
import { ExamResponse } from '../models/examResponseDTO';
import { Exam_Student } from '../models/Exam_Student';

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

  createExam(exam: ExamResponse): Observable<ExamResponse>{
    return this.http.post<ExamResponse>(`${this.url}/createExam`, exam)
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

  addStudentsToExam(idExam: number, students: StudentResponse[]):Observable<void>{
    return this.http.patch<void>(`${this.url}/addStudentsToExam?idExam=${idExam}`, students)
  }

  getAllStudentWithNote(): Observable<Exam_Student[]>{
    return this.http.get<Exam_Student[]>(`${this.url}/getAllStudentWithNote`)
  }

  addNoteToExam(examStudent: Exam_Student): Observable<void>{
    return this.http.patch<void>(`${this.url}/addNoteToExam`, examStudent)
  }

  getAllExamsByIdStudent(idStudent:number): Observable<Exam_Student[]>{
    return this.http.get<Exam_Student[]>(`${this.url}/getAllExamsByIdStudent`, {params: {idStudent: idStudent.toString()}})
  }
}