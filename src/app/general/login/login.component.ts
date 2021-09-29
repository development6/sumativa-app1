import { Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  mensaje:string="";

  email:string="";
  password:string="";

  /*constructor() { }

  ngOnInit(): void {
  }*/


  insertar():void{
    /*console.log("metodo insertar..");
    console.log("Email "+this.email);
    console.log("Password "+this.password);*/
    console.log(" metodo insertar ...");
    if( this.validarEmail() && this.validarPassword()){
      console.log("Email: "+this.email);
      console.log("Password: "+this.password);
    }else {
      console.log("No validado");
    }
  }

  validarEmail(): boolean {
    
    if (this.email.trim().length > 0) {
      console.log("El campo contiene un string válido que no son espacios");
      if (this.email.indexOf('@', 0) == -1 || this.email.indexOf('.', 0) == -1) {
        //alert('El correo electrónico introducido no es correcto.');
        this.mensaje="El correo electronico no es correcto";
        console.log("Email: "+this.email);
        return false;
      } 
      else{
        return true;
      }

    } 
    else {
      //alert("El campo contiene espacios o está vacío");
      this.mensaje="El campo contiene espacios o está vacío";
      return false;
    }

  }

  validarPassword(): boolean{
    if (this.password.trim().length==0) {
      //alert("Campo vacio");
      this.mensaje="No pueden haber campos vacios"
      return false;
      } 
      else if (this.password.length <= 8) {
        console.log("Pass: "+this.password);
        return true;
      } 
      else {
        this.mensaje="Password maximo 8 caracteres"
        return false;
      }
    }
  

}
