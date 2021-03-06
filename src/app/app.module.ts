import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { GeneralModule } from './general/general.module';
import { CompartidaModule } from './compartida/compartida.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HeaderComponent } from './compartida/header/header.component';
//import { FooterComponent } from './compartida/footer/footer.component';
//import { AsideComponent } from './compartida/aside/aside.component';
//import { LoginComponent } from './general/login/login.component';
//import { RegistroComponent } from './general/registro/registro.component';
//import { ProductoComponent } from './general/producto/producto.component';
//import { HomeComponent } from './general/home/home.component';
//import { NotFoundComponent } from './general/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    //HeaderComponent,
    //FooterComponent,
    //AsideComponent,
    //LoginComponent,
    //RegistroComponent,
    //ProductoComponent,
    //HomeComponent,
    //NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GeneralModule,
    CompartidaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
