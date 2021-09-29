import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  httpClient: any;

  constructor(public productosService: ProductosService) { }

  ngOnInit(): void {
  }



  

  restar(id:number|undefined){
    console.log("entre al metodo");
    for(let i=0; i<this.productosService.productos.length;i++){
      if(this.productosService.productos[i].cantidad==0){
        alert("Lo sentimos, ya no quedan unidades");
      }
      else if(this.productosService.productos[i].id == id){
        console.log(this.productosService.productos[i].cantidad=Number(this.productosService.productos[i].cantidad)-1)
        this.productosService.lista.push(this.productosService.productos[i]);
      }
      
    }
    
  }


  eliminar(id:number|undefined){
    
    for(let i=0; i<this.productosService.productos.length;i++){
      
      if(this.productosService.productos[i].id == id){
        console.log(this.productosService.productos[i].cantidad=Number(this.productosService.productos[i].cantidad)+1)
        this.productosService.lista.splice(Number(this.productosService.productos[i]),1);

        
      }
    }
      
  } 

}   


