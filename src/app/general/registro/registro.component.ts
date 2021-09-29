import { Component} from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  mensaje:string="";

  //nombre:string|null=null;
  nombre:string="";
  email:string="";
  password:string="";
  passwordConfirm:string="";

  /*constructor() { }

  ngOnInit(): void {
  }*/

  insertar():void{
    /*console.log("metodo insertar...");
    console.log("Nombre: "+this.nombre);
    console.log("Password: "+this.password);
    console.log("PasswordConfirm: "+this.passwordConfirm);*/
    console.log(" metodo insertar ...");
    if( this.validarNombre() && this.validarEmail() && this.validarPassword() && this.validarConfirPassword()){
      console.log("Email: "+this.email);
      console.log("Password: "+this.password);
      console.log("PasswordConfirm: "+this.passwordConfirm);
    }else {
      console.log("No validado");
    }
  }


  validarNombre():boolean {
    if(this.nombre.trim().length == 0){
      this.mensaje="Nombre no puede estar vacio";
      return false;
    }
    else if(this.nombre.length > 10){
      this.mensaje="Nombre maximo 10 caracteres";
      return false;
    }
    else{
      console.log("Nombre: "+this.nombre);
      return true;
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
    else if (this.password.length > 8) {
      this.mensaje="Password maximo 8 caracteres";
      return false;
    } 
    else {
      console.log("Pass: "+this.password);
      return true;
    }

    }

    validarConfirPassword(): boolean{
      if (this.passwordConfirm.trim().length == 0) {
        this.mensaje="No pueden hacer campos vacios";
        return false;
      }

      else if(this.passwordConfirm.length > 8 ){
        console.log("Pass: "+this.passwordConfirm);
        this.mensaje="Password maximo 8 caracteres";
        return false;
      }

      else if(this.password != this.passwordConfirm){
        console.log("ConfirmPass: "+this.passwordConfirm);
        this.mensaje="Las pass no son iguales";
        return false;

      }
      else{
        console.log("bien");
        return true;
      }

    }
      

}
