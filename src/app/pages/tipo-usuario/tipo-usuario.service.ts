import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import {tipoUsuario} from './models/tipoUsuario'; 

@Injectable({
  providedIn: 'root'
})
export class TipoUsuarioService {
  API_URI = 'http://localhost:3000/api';
  //variable para llenar dentro del constructor para luego utilizarce 
    httpheaders:any;
  constructor(private http:HttpClient) {
    //Creamos un constructor para poder mandar la cabecera solo con la asignacion dentro del metodo
    //cachamos el token que esta almacenado en el localstorage
    var session = localStorage.getItem('x-access-token');
    //A la variable de header le asiggnamos el tipo de dato y le mandamos el token para poder validar 
    this.httpheaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-access-token': session
     });
   }
    //Metodo para traer todos los tipos de usuario existente 
    //Despues del metodo del get ponemos comillas y asignamos los valores ya creados en el constructor para mandar 
    //Nuesta validacion
    getTipoUsuario(){
      return this.http.get(`${this.API_URI}/tipoUsuario`, {headers: this.httpheaders});
    }
    //
}
