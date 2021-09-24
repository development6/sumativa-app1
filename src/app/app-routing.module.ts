import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductoComponent} from './general/producto/producto.component';
import {RegistroComponent} from './general/registro/registro.component';
import {LoginComponent} from './general/login/login.component';
import {HomeComponent} from './general/home/home.component';
import { NotFoundComponent } from './general/not-found/not-found.component';

const routes: Routes = [
  {path: '', component:HomeComponent}, //ruta por default
  {path: 'producto', component:ProductoComponent}, 
  {path: 'registro', component:RegistroComponent},
  {path: 'login', component:LoginComponent},
  {path: 'notFound', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
