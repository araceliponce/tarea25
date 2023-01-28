/* https://stackoverflow.com/questions/51342896/hide-angular-navigation-controls-if-user-is-not-logged-in  */

export enum Cargos{
  admin = 'admin',
  user = 'user',
  ninguno = 'ninguno',
}

export interface User {
   //:::
  Id: string,
  Nombre: string,
  Apellido: string,
  Correo: string,
  Cargo?: String
}

export interface UserCompleto extends User{
  Contraseña?: String
}

/* 
https://material.angular.io/components/list/examples

https://www.concretepage.com/angular-material/angular-material-list-with-checkbox

https://material.angular.io/components/checkbox/overview

*/

// https://jsonplaceholder.typicode.com/todos
export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}