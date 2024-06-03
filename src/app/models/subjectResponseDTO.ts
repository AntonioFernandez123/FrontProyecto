import { Grade } from "./gradeDTO"

export class SubjectResponse{

    idSubject: number
    name: string
    shortName: string
    hourPerWeek: number
    grade: Grade

    constructor(idSubject: number, name: string, shortName: string, hourPerWeek: number, grade: Grade){
        this.idSubject = idSubject
        this.name = name
        this.shortName = shortName
        this.hourPerWeek = hourPerWeek
        this.grade = grade
    }
}