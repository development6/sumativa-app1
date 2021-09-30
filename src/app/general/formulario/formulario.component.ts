import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

  mensaje_pais:string="";
  mensaje_calle:string="";
  mensaje_ciudad:string="";
  mensaje_region:string="";
  mensaje_codigo:string="";

  mensaje_tipoTarjeta:string="";
  mensaje_nombreCliente:string="";
  mensaje_numTarjeta:string="";
  mensaje_codigoSeg:string="";
  mensaje_mesExp:string="";
  mensaje_annoExp:string="";

  valido:string= "";

  pais:string="";
  calle:string="";
  ciudad:string="";
  region:string="";
  codigo:string="";

  tipoTarjeta:string="";
  nombreCliente:string="";
  numTarjeta:string="";
  codigoSeg:string="";
  mesExp:string="";
  annoExp:string="";

  /*constructor() { }

  ngOnInit(): void {
  }*/


  insertarEnvio():void{
    if(this.validarPais() && this.validarCalle() && this.validarCiudad() && 
    this.validarRegion() && this.validarCodigoP() &&
    
    this.validarNombreCli() && this.validarNumTarjeta() && this.validarCodSeg()
    ){
      this.pais;
      this.calle;
      this.ciudad;
      this.region;
      this.codigo;
      this.nombreCliente;
      this.numTarjeta;
      this.codigoSeg;
      this.valido="Si es valido";
    }
    else{
      this.valido="No es valido";
    }
    
  }


  validarPais():boolean | undefined{
    if(this.pais.trim().length == 0){
      this.mensaje_pais="Debe ingresar un pais";
      return false;
    }
    else if(this.pais.length > 10){
      this.mensaje_pais="El maximo es de 10 caracteres";
      return false;
    }
    else{
      this.mensaje_pais="";
      return true;
    }
  }

  validarCalle():boolean | undefined{
    if(this.calle.trim().length == 0){
      this.mensaje_calle="Debe ingresar una calle";
      return false;
    }
    else if(this.calle.length > 15){
      this.mensaje_calle="Excede el largo del campo";
      return false;
    }
    else{
      this.mensaje_calle="";
      return true;
    }
  }

  validarCiudad():boolean | undefined{
    if(this.ciudad.trim().length == 0){
      this.mensaje_ciudad="Debe ingresar una ciudad";
      return false;
    }
    else if(this.ciudad.length > 10){
      this.mensaje_ciudad="El maximo es de 10 caracteres";
      return false;
    }
    else{
      this.mensaje_ciudad="";
      return true;
    }
  }

  validarRegion():boolean | undefined{
    if(this.region.trim().length == 0){
      this.mensaje_region="Debe ingresar una region";
      return false;
    }
    else if(this.region.length > 10){
      this.mensaje_region="El maximo es de 10 caracteres";
      return false;
    }
    else{
      this.mensaje_region="";
      return true;
    }
  }

  validarCodigoP():boolean | undefined{
    var pattern  = new RegExp(/^\d*$/);
    
    if(!pattern.test(this.codigo)){
      this.mensaje_codigo="Solo numeros";
      return false;
    }

    if(this.codigo.trim().length == 0){
      this.mensaje_codigo="Debe ingresar codigo postal";
      return false;
    }
    else if(this.codigo.length != 7){
      this.mensaje_codigo="El codigo postal es de 7 caracteres";
      return false;
    }
    else{
      this.mensaje_codigo="";
      return true;
    }
  }
  


  //--------------------------------------------

  validarNombreCli():boolean | undefined {
    if(this.nombreCliente.trim().length == 0){
      this.mensaje_nombreCliente="Debe ingresar nombre de cliente";
      return false;
    }
    else if(this.calle.length > 15){
      this.mensaje_nombreCliente="Excede el largo del campo";
      return false;
    }
    else{
      this.mensaje_nombreCliente="";
      return true;
    }

  }


  validarNumTarjeta():boolean | undefined{
    var pattern  = new RegExp(/^\d*$/);
    
    if(!pattern.test(this.numTarjeta)){
      this.mensaje_numTarjeta="Solo numeros";
      return false;
    }

    if(this.numTarjeta.trim().length == 0){
      this.mensaje_numTarjeta="Debe ingresar un numero de tarjeta";
      return false;
    }
    else if(this.numTarjeta.length != 16){
      this.mensaje_numTarjeta="El numero de tarjeta es de 16 caracteres";
      return false;
    }
    else{
      this.mensaje_numTarjeta="";
      return true;
    }
  }


  validarCodSeg():boolean | undefined{
    var pattern  = new RegExp(/^\d*$/);
    
    if(!pattern.test(this.codigoSeg)){
      this.mensaje_codigoSeg="Solo numeros";
      return false;
    }

    if(this.codigoSeg.trim().length == 0){
      this.mensaje_codigoSeg="Debe ingresar un codigo de seguridad";
      return false;
    }
    else if(this.codigoSeg.length != 3){
      this.mensaje_codigoSeg="El codigo de seguridad es de 3 caracteres";
      return false;
    }
    else{
      this.mensaje_codigoSeg="";
      return true;
    }
  }

  /*validarTipTarj():boolean | undefined{
    if(this.tipoTarjeta.trim().length == 0){
      this.mensaje_tipoTarjeta="Debe ingresar un tipo de tarjeta";
      return false;
    }
    else if(this.tipoTarjeta.trim() != "credito" || this.tipoTarjeta.trim() != "debito"){
      this.mensaje_tipoTarjeta="Debe ser credito o debito";
      return false;
    }
    else{
      this.mensaje_tipoTarjeta="";
      return true;
    }
  }*/



}
