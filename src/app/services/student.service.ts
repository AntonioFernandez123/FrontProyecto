import { Injectable } from '@angular/core';
import { Student } from '../models/studentDTO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentResponse } from '../models/studentResponseDTO';
import { Exam_Student } from '../models/Exam_Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url = "http://localhost:8081/api/student";
  arrStudent:Student[]=[]

  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.url}/getAllStudents`)
  }

  getStudentById(idStudent: number): Observable<Student> {
    return this.http.get<Student>(`${this.url}/getStudentById`, {params: {idStudent: idStudent.toString()}})
  }

  createStudent(student: StudentResponse): Observable<void>{
    return this.http.post<void>(`${this.url}/createStudent`, student)
  }

  createStudentCSV(file: File): Observable<void>{
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<void>(`${this.url}/createStudentCSV`, formData)
  }
  
  updateStudent(student: Student): Observable<void>{
    return this.http.put<void>(`${this.url}/updateStudent`, student)
  }

  deleteStudent(idStudent: number): Observable<void>{
    return this.http.delete<void>(`${this.url}/deleteStudent`, {params: {idStudent: idStudent.toString()}})
  } 

  getAllStudentInSubject(idSubject: number): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.url}/getAllStudentInSubject`, {params: {idSubject: idSubject.toString()}})
  }

  findAllWithIdExam(idExam: number): Observable<Blob>{
    const headers = new HttpHeaders({'Accept':'text/csv'})
    return this.http.get(`${this.url}/findAllWithIdExam?idExam=${idExam}`, { headers, responseType: 'blob' })
  }
}
