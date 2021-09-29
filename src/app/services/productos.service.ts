import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[] = [];
  //---------------------------------
  lista: Producto[]=[];


  constructor(private http: HttpClient){
    console.log("Productos Service");
    this.cargarProductos();
  }


  private cargarProductos(){
      console.log("Metodo privado CargarProductos");

      this.http.get('assets/data/productos.json')
      .subscribe((respuesta: Producto | any) => {
        //this.producto=respuesta;
        this.productos=respuesta.productos;
        console.log("Respuesta Lista: ",this.productos);
        
        

      });

  }

  
}
