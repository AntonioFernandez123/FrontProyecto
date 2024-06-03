import { Role } from "./role";
import { User } from "./userDTO";


export class StudentResponse extends User{
    
    constructor(idUser?:number, name?:string, lastName?:string, password?:string, email?:string, userName?:string, dni?:string, role?:Role) {
       super(idUser, name, lastName, password, email, userName, dni, role);
     }
}