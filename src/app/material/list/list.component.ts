import { Component } from '@angular/core';
import { Todo } from 'src/app/models/users';
import { TodosServiceService } from 'src/app/services/todos-service.service';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  //ng g s services/todos_service

  //aqui creamos una instancia de userserviceservice
  constructor(private todosService:TodosServiceService){}


  //array que va a obtener toda la info del metodo getusersall
  todosListado = new Array(); // con ()

  //ejecutar mmetodo getuserall al cargar el componente
  // ngOnInit(){
    CargarTodos(){
    /* 
    ejecutar metodo getUsersAll y obtener json devuelto por la api*/
    this.todosService.getTodosAll().subscribe({
      next: (todoAll:Todo[])=> this.todosListado=todoAll, //el userAll dentro del () puede tener cualquier nombre, solo importa que sea de tipo Users[]
      error:(error)=>console.error(error),
      complete:()=> console.info('completed!')
    }) 

    //ejecutar el metodo getUsersAllInterceptor que captura la comunicacion, no un resultado
    //de toda la comunicaion solo queremos el body (e json esta dentro del body)
   

  }
}
