import { Teacher } from "./teacherDTO"

export class Grade{

    idGrade: number
    name: string
    shortName: string
    teacher: Teacher

    constructor(idGrade: number, name: string, shortName: string, teacher: Teacher) {
        this.idGrade = idGrade
        this.name = name
        this.shortName = shortName
        this.teacher = teacher
    }
}