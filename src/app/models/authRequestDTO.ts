export class authRequest{
    nomUsuario : string
    password : string  

    constructor(nomUsuario : string, password : string){
        this.nomUsuario = nomUsuario
        this.password = password
    }
}