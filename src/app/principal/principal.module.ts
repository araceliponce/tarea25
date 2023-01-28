import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { VistaComponent } from './vista/vista.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { ClipboardModule } from 'ngx-clipboard';
import { EdicionComponent } from './edicion/edicion.component';



@NgModule({
  declarations: [
    MenuComponent,
    VistaComponent,
    FormularioComponent,
    BusquedaComponent,
    LoginComponent,
    MensajeComponent,
    EdicionComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    //1. npm install ngx-clipboard , 2.import
    ClipboardModule
  ],
  exports:[
    MenuComponent,
    VistaComponent,
    FormularioComponent,
    BusquedaComponent,
    LoginComponent
  ]
})
export class PrincipalModule { }
