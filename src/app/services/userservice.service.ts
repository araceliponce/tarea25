import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  //:: 5 servicios  de la api son vista buscar nuevo eliminar y actualizar
  //cada funcion aqui esta asociada a un serviio de la api, primero crearia en la bd un procedimiento, escribiria sus respectivos metodos en php y desde aqui ya los usamos

  getVista():Observable<User[]>{
    let rutaApi = environment.apiURL + 'vista/';
    return this.http.get<User[]>(rutaApi); //para recibir este conjunto de datos (?que es es un json) crearmos una interfaz User  
    //[] significa que es una matriz
    //:observable tiene que tener entre <> el mismo tipo de datos que se obtiene ( http.get<User[]> entonces :observable<user[]>)
  }

  //es un metodo post (crear nuevo usuario), el parametro es un objeto de tipo User
  getNuevo(registro:User):Observable<User>{
    let rutaApi = environment.apiURL + 'nuevo/';
    return this.http.post<User>(rutaApi,registro); 
  }

  //aqui tmb cambie ...
  /* ++ |null porque en editar/:id tenia error
  Argument of type 'string | null' is not assignable to parameter of type 'string'. 
  Type 'null' is not assignable to type 'string'. */
  getBuscar(userId:string | null):Observable<User[]>{
    let rutaApi = environment.apiURL + 'buscar/'+userId;
    return this.http.get<User[]>(rutaApi); 
  }

  //el id no va ser visible el momento en o eliminemos pero igual lo enviamos al url
  //+++habia coloado userId:User
  getEliminar(userId:string):Observable<string>{
    let rutaApi = environment.apiURL + 'eliminar/'+userId;
    return this.http.delete<string>(rutaApi); 
    //recibimos un string
  }

  //o getEditar  //es put //editar porque eso pusimos en index.http
  getEditar(registro:User):Observable<User>{
    let rutaApi = environment.apiURL + 'editar/';
    return this.http.put<User>(rutaApi,registro); 
  }
}
