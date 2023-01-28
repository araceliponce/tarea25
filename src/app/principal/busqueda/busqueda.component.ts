import { Component } from '@angular/core';
import { User } from 'src/app/models/users';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  
  constructor(private servicio:UserserviceService){}
 
  ngOnInit(){
  
  }

  usuarioEncontrado!: User |null; //usuario es User o null

  BuscaUsuario(id:string){
    console.log('...buscando user de id '+id);

    this.servicio.getBuscar(id).subscribe({
      next: (usuario: User[])=> {
        this.usuarioEncontrado = usuario[0]; //porque usuario es un array de 1 objeto
        console.log(this.usuarioEncontrado);

      }
    })

  }
  
}
