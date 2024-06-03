import { Exam } from "./examDTO";
import { Role } from "./role";
import { Subject } from "./subjectDTO";
import { User } from "./userDTO";


export class Student extends User{

    subjects: Subject[] = [];
    exams: Exam[] = [];
    
    constructor(idUser?:number, name?:string, lastName?:string, password?:string, email?:string, userName?:string, dni?:string, role?:Role, subjects?: Subject[], exams?: Exam[]) {
       super(idUser, name, lastName, password, email, userName, dni, role);

       this.subjects = subjects || new Array<Subject>()
       this.exams = exams || new Array<Exam>()
     }

}