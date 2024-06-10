import { Grade } from "./gradeDTO"

export class SubjectResponse{

    idSubject: number
    name: string
    shortName: string
    hourPerWeek: number
    grade?: Grade

    constructor(idSubject?: number, name?: string, shortName?: string, hourPerWeek?: number, grade?: Grade){
        this.idSubject = idSubject || 0
        this.name = name || ""
        this.shortName = shortName || ""
        this.hourPerWeek = hourPerWeek || 0
        this.grade = grade
    }
}