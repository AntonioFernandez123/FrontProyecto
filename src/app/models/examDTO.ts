import { Exam_Student } from "./Exam_Student"
import { Student } from "./studentDTO"
import { Subject } from "./subjectDTO"

export class Exam{
    idExam: number
    themes: string
    description: string
    date: string
    hour: string
    subject?: Subject
    examStudent?: Exam_Student[]

    constructor(idExam?: number, themes?: string, description?: string, date?: string, hour?: string, subject?: Subject, examStudent?: Exam_Student[]){
        this.idExam = idExam || 0
        this.themes = themes || ""
        this.description = description || ""
        this.date = date || ""
        this.hour = hour || ""
        this.subject = subject
        this.examStudent = examStudent
    }
}