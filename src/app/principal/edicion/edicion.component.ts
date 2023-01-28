import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargos, User } from 'src/app/models/users';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent {

  constructor(private servicio: UserserviceService, private route:ActivatedRoute, private router:Router){}


  userEnEdicion!: User
  // = {Id: '', Nombre: '', Apellido:'', Correo:'', Cargo: ''}

  datos: User[] = [
    this.userEnEdicion
  ];


  cargosValues= Object.values(Cargos);
  // userId = this.route.snapshot.paramMap.get('id');

  ngOnInit() {
    let userId = this.route.snapshot.paramMap.get('id');
    //buscar por id
    this.servicio.getBuscar(userId).subscribe({
      next: (usuario: User[])=> {
        this.userEnEdicion = usuario[0]; //porque usuario es un array de 1 objeto
        console.log(this.userEnEdicion);

      }
    })
  }



  EnviarEditado(){
    this.servicio.getEditar(this.userEnEdicion).subscribe({
      next: (editable:User)=>{
        editable=this.userEnEdicion
        console.log(editable);
      }
     })

   //luego regresamos a
   this.router.navigate(['/vista'])
    
  }

  CancelarEditado(){
    if(confirm('¿Confirmas que deseas cancelar la adición de este usuario? Perderás los datos llenados en este formulario')){
       //luego regresamos a
        this.router.navigate(['/vista'])
    } else {
      return
    } 
    
  }
}
