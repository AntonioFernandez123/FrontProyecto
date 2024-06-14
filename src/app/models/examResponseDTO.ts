import { Subject } from "./subjectDTO"

export class ExamResponse{
    idExam: number
    themes: string
    description: string
    date: string
    hour: string
    subject?: Subject

    constructor(idExam?: number, themes?: string, description?: string, date?: string, hour?: string, subject?: Subject){
        this.idExam = idExam || 0
        this.themes = themes || ""
        this.description = description || ""
        this.date = date || ""
        this.hour = hour || ""
        this.subject = subject 
    }
}