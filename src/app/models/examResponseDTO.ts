import { Subject } from "./subjectDTO"

export class ExamResponse{
    idExam: number
    themes: string
    description: string
    date: Date
    hour: Date
    subject: Subject

    constructor(idExam: number, themes: string, description: string, date: Date, hour: Date, subject: Subject){
        this.idExam = idExam
        this.themes = themes
        this.description = description
        this.date = date
        this.hour = hour
        this.subject = subject
    }
}