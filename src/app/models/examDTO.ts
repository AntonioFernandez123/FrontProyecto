import { Student } from "./studentDTO"
import { Subject } from "./subjectDTO"

export class Exam{
    idExam: number
    themes: string
    description: string
    date: Date
    hour: Date
    subject: Subject
    students: Student[]

    constructor(idExam: number, themes: string, description: string, date: Date, hour: Date, subject: Subject, students: Student[]){
        this.idExam = idExam
        this.themes = themes
        this.description = description
        this.date = date
        this.hour = hour
        this.subject = subject
        this.students = students
    }
}