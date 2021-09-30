import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { CarroComponent } from './carro/carro.component';
import { ProductoComponent } from './producto/producto.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormularioComponent } from './formulario/formulario.component';



@NgModule({
  declarations: [
    CarroComponent,
    ProductoComponent,
    NotFoundComponent,
    RegistroComponent,
    LoginComponent,
    HomeComponent,
    FormularioComponent
  ],
  exports: [
    CarroComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    
  ]
})
export class GeneralModule { }
