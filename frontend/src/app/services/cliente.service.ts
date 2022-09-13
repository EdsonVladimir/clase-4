import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(public http:HttpClient) { }

  obtenerPersonas(){
    let datos =  this.http.get('http://localhost:3000/ruta'); 
    return datos;
  }
  registrarPersona(persona:any){
    return this.http.post('http://localhost:3000/registro', persona);
  }
}
