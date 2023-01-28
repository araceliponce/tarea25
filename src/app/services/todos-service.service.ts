import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class TodosServiceService {

  // constructor() { }

  //empezamos creando una instancia de tipo httpclient
  constructor(private http:HttpClient){}


  //definir la url del api (el apiURL/ esta en environment.ts, es una forma de base url, ya que podemos añadirle distintos endpoints)
  // apiUser = environment.apiURL+'users/';
  apiTodo = environment.apiURL+'todos/'; //++++


  //metodos GET para obtener datos de la api users  (todos los metodos en el servicio tienen que ser :observable)

  //la interface en models/user.ts se llama Todo y es una matriz, por eso Todo[]
  getTodosAll():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.apiTodo)
  }


}
