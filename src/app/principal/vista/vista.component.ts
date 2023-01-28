import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/users';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {


  // constructor(){}

  //que acceda a userservice
  constructor(private servicio:UserserviceService){}

  lista: User[] = []; //una matriz

  ngOnInit(){
    //cuando cargue la app

    this.servicio.getVista().subscribe({
      next: (vista: User[])=> this.lista = vista

    });

    //next es: despues que ejecute el servicio lista va a guardar los valores obtenidos con getvista().

  }

  //eliminar devuelve un mensaje
  Eliminar(id:string){
    if (confirm('¿Confirma que desea eliminar el usuario de la base de datos?')){
      console.log('...eliminando item de id', id)
      this.servicio.getEliminar(id).subscribe({
        next: (mensaje:string)=> {
          console.log(mensaje);
          alert(mensaje)
        }
      });
    } else{
      return
    }

    /* funciona, pero 
    error: SyntaxError: JSON.parse: unexpected character at line 1 column 1 of the JSON data
    
    text: "El registro se eliminó satisfactoriamente" */

    //luego 
    this.lista=[];
    console.log('refrescando vista')
    this.servicio.getVista().subscribe({
      next: (vista: User[])=> this.lista = vista
    });
  }





}
