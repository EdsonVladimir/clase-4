import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
  public Personas:any=[];
  constructor(public servicio:ClienteService) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }
   obtenerDatos(){
    this.servicio.obtenerPersonas().subscribe(
      res =>{
        let respuesta:any = res;
        this.Personas = respuesta.contenido;
        console.log(this.Personas);
        
      }
    )
   }


}
