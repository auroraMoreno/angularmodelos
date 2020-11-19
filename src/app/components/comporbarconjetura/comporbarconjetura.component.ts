import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

@Component({
  selector: 'app-comporbarconjetura',
  templateUrl: './comporbarconjetura.component.html',
  styleUrls: ['./comporbarconjetura.component.css']
})
export class ComporbarconjeturaComponent implements OnInit {

  public numero:number;
  public numero1: number;
  public numeros = [];

  constructor(private _activeRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params:Params)=>{
      this.numeros=[];
      if(params.numero !=null){
        this.numero1 = params.numero;
        this.numero = parseInt(params.numero);
        while(this.numero !=1){
          if(this.numero%2 == 0){
            this.numero = this.numero / 2;
          }else{
            this.numero = this.numero * 3 + 1
          }
          console.log(this.numero);
          this.numeros.push(this.numero);
        }
   
      }else{
        console.log("no");
      }
   });
  }

}
