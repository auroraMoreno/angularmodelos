import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import {Coche} from './../../models/coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {
  @Input() car : Coche;
  public mensaje: string; 

  

  constructor() { }

  comporbarEstado(){
    if(this.car.estado == false){
      this.mensaje="El coche está apagado";
      this.car.velocidad=0;
      return false; //pa saber si puedo acelerar
    }else{
      this.mensaje="El coche está encendido";
      return true;
    }
  }

  encenderCoche(){
    this.car.estado = !this.car.estado;
    this.comporbarEstado();
  }

  acelerarCoche(){
    if(this.comporbarEstado()==false){
      alert("el coche no está encendido");
    }else{
      this.car.velocidad=this.car.velocidad + this.car.aceleracion;
      if(this.car.velocidad >= this.car.velocidadmaxima){
        this.car.velocidad = this.car.velocidadmaxima;
      }
    }
  }

  //cuando recibimos obj no se utiliza el constructor
  ngOnInit(): void {
      this.comporbarEstado();

  }

}
