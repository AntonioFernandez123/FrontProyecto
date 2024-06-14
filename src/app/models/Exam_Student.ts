import { Exam } from "./examDTO"
import { ExamResponse } from "./examResponseDTO"
import { Student } from "./studentDTO"
import { StudentResponse } from "./studentResponseDTO"

export class Exam_Student{

    idExam_Student:number
    exam?:ExamResponse
    student?:StudentResponse
    note:number

    constructor(idExam_Student?:number, exam?:Exam, student?:Student, note?:number) {
        this.idExam_Student = idExam_Student || 0
        this.exam = exam
        this.student = student
        this.note = note || 0
    }
}