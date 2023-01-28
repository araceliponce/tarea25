import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargos, User } from 'src/app/models/users';
import { UserserviceService } from 'src/app/services/userservice.service';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor(private userService: UserserviceService,private route:ActivatedRoute, private router:Router){}

  //para los ngmodel
  /* userId = '';
  userNom = '';
  userApe = '';
  userCor = '';
  userCar = ''; */

  userPass= '';
  userPassConfirmacion = '';

  // Crear objeto que se enviara a al api
        /* [
        {Id: this.userId, Nombre: this.userNom, Apellido:this.userApe, Correo: this.userCor, Cargo: this.userCar}
      ];  */ 
  // colocando Cargo:Cargos se subrayaba Cargo


  userNuevo: User = {Id: '', Nombre: '', Apellido:'', Correo:'', Cargo: ''}

  datos: User[] = [
    this.userNuevo
  ];




  cargosKeys = Object.keys(Cargos);
  cargosValues= Object.values(Cargos);

  ngOnInit() {
    console.log(Cargos); //{ 0: "admin", 1: "user", 2: "ninguno", admin: 0, user: 1, ninguno: 2 }
    console.log(this.cargosKeys); //[ "0", "1", "2", "admin", "user", "ninguno" ]
    console.log(this.cargosValues); //[ "admin", "user", "ninguno", 0, 1, 2 ]

    //++++++++cambiando los valores numericos de enum(0,1,2) a string cargoskeys == cargosvalues
  }


  /*!!! JSON.parse: unexpected character at line 1 column 1 of the JSON data */
  EnviarNuevo(){
    console.log(this.datos);
    console.log(this.datos[0]); 
   this.userService.getNuevo(this.userNuevo).subscribe({
    next: (nuevo:User)=>{
      nuevo=this.userNuevo
      console.log(nuevo);
    }
   })

   //luego vaciamos los campos
    this.userNuevo = {Id: '', Nombre: '', Apellido:'', Correo:'', Cargo: ''}
    this.userPass= '';
    this.userPassConfirmacion = '';
  }

  CancelarNuevo(){
    if(confirm('¿Confirmas que deseas cancelar la adición de este usuario? Perderás los datos que hayas llenado en este formulario')){
      this.router.navigate(['/vista'])
    } else {
      return
    } 
    
  }

  
}
