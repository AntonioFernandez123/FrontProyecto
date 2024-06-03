import { Role } from "./role"

export class User{

    idUser:number
    name:string
    lastName:string
    password:string
    email:string
    userName:string
    dni:string
    role:Role

    constructor(idUser?:number, name?:string, lastName?:string, password?:string, email?:string, userName?:string, dni?:string, role?:Role){
        this.idUser = idUser || 0;
        this.name = name || "";
        this.lastName = lastName || "";
        this.password = password || "";
        this.email = email || "";
        this.userName = userName || "";
        this.dni = dni || "";
        this.role = role || Role.TEACHER;
    }
}