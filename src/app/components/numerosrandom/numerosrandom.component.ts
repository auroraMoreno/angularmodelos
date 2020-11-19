import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-numerosrandom',
  templateUrl: './numerosrandom.component.html',
  styleUrls: ['./numerosrandom.component.css']
})

export class NumerosrandomComponent implements OnInit {
  public numeros:Array<number>;

  generarNumero(){
    for(var i = 1; i <10; i++){
      var aleat = Math.floor(Math.random() * 60);
      this.numeros.push(aleat);
    }
  }

  constructor() {
    this.numeros=[];}

  ngOnInit(): void {
    this.generarNumero();
  }

}
