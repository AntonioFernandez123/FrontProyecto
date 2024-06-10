
import { Subject } from "./subjectDTO"
import { Teacher } from "./teacherDTO"

export class Grade{

    idGrade: number
    name: string
    shortName: string
    teacher?: Teacher
    subjects?: Subject[]

    constructor(teacher?: Teacher, idGrade?: number, name?: string, shortName?: string, ) {
        this.idGrade = idGrade || 0
        this.name = name || ""
        this.shortName = shortName || ""
        this.teacher = teacher 
    }
}