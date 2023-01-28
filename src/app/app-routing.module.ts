import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { CandesactiveGuard } from './candesactive.guard';
import { BusquedaComponent } from './principal/busqueda/busqueda.component';
import { EdicionComponent } from './principal/edicion/edicion.component';
import { FormularioComponent } from './principal/formulario/formulario.component';
import { LoginComponent } from './principal/login/login.component';
import { MensajeComponent } from './principal/mensaje/mensaje.component';
import { VistaComponent } from './principal/vista/vista.component';

const routes: Routes = [
  {path: 'vista', component: VistaComponent, canActivate: [CanactivateGuard]},
  {path: 'editar/:id', component: EdicionComponent, canActivate: [CanactivateGuard]},
  {path: 'nuevo', component: FormularioComponent, canActivate: [CanactivateGuard]},
  {path: 'busqueda', component: BusquedaComponent, canActivate: [CanactivateGuard]},
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'mensaje', component: MensajeComponent, canDeactivate: [CandesactiveGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
