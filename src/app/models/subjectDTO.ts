import { Exam_Student } from "./Exam_Student"
import { Exam } from "./examDTO"
import { Grade } from "./gradeDTO"
import { Student } from "./studentDTO"

export class Subject{
    
    idSubject: number
    name: string
    shortName: string
    hourPerWeek: number
    grade?: Grade
    students?: Student[]
    exam?: Exam_Student[]

    constructor(idSubject?: number, name?: string, shortName?: string, hourPerWeek?: number, grade?: Grade, students?: Student[]){
        this.idSubject = idSubject || 0
        this.name = name || ""
        this.shortName = shortName || ""
        this.hourPerWeek = hourPerWeek || 0
        this.grade = grade
        this.students = students
    }

}