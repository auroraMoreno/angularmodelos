import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padrecontadores',
  templateUrl: './padrecontadores.component.html',
  styleUrls: ['./padrecontadores.component.css']
})
export class PadrecontadoresComponent implements OnInit {

  public numeros: Array<number>;
  public mensaje: string; 


  constructor() { 
    this.numeros = [5,9,14,20];
   
  }

  recibirIdContador(event){
    this.mensaje="contador incrementando" + event;
  }

  ngOnInit(): void {
  }

}
