import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  @Input() titulo:any=null;
  @Input() detalle:any=null;
  @Input() accion:any=null;
  @Input() Fecha:any=null;

  mensaje:string='';

  @Output() accionModal =new EventEmitter<string>();


  constructor(public productosService: ProductosService) { }

  ngOnInit(): void {
  }


  eliminar(id:number|undefined){
    
    for(let i=0; i<this.productosService.productos.length;i++){
      
      if(this.productosService.productos[i].id == id){
        console.log(this.productosService.productos[i].cantidad=Number(this.productosService.productos[i].cantidad)+1)
        this.productosService.lista.splice(Number(this.productosService.productos[i]),1);

        
      }
    }
      
  } 


  enviarDatos(){
    this.mensaje="Enviando datos al padre";
    console.log("enviar datos", this.mensaje);
    this.accionModal.emit(this.mensaje);
  }

}
