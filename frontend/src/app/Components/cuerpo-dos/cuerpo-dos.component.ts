import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cuerpo-dos',
  templateUrl: './cuerpo-dos.component.html',
  styleUrls: ['./cuerpo-dos.component.css']
})
export class CuerpoDosComponent implements OnInit {
  public Persona = {
    nombre: '',
    apellido:'',
    sexo:'',
    fecha_nacimiento:''
  }
  constructor(public service:ClienteService) { }

  ngOnInit(): void {
  }
  onClick(){
    console.log(this.Persona);
    this.service.registrarPersona(this.Persona).subscribe(
      res=>{
      let respuesta = res;
      console.log(respuesta);
      
    })
  }
}
