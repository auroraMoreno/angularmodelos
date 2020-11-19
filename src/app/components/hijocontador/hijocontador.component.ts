import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijocontador',
  templateUrl: './hijocontador.component.html',
  styleUrls: ['./hijocontador.component.css']
})
export class HijocontadorComponent implements OnInit {

  @Input() inicio:number;
  @Input() idContador:number;

  //declarar un metodo para poder devovler la info al padre 
  @Output() recibirIdContador = new EventEmitter();


 
  public numero:number; //para saber en que numero está el contador
  public mensaje: string; 

   //Realizamos la llamada al padre cuando deseemos: 
   //el metodo de llamada del hijo tiene que recibir event
   //aunque no lo usemos 
  incrementarContador(event){
    this.numero = this.numero + 1;
    this.mensaje = "Contador en " + this.numero;
    this.recibirIdContador.emit(this.idContador);
  }



  constructor() { }

  ngOnInit(): void {
    this.numero =this.inicio;
    this.mensaje ="Contador Id: " +this.idContador + "Valor incial: " + this.inicio;
  }

}
