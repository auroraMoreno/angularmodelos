import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Comic} from './../../models/comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  @Input() comic : Comic;
  @Input() idComic : number;
 
  @Output() recibirComic = new EventEmitter();
  @Output() eliminarComic = new EventEmitter();

  seleccionarFavorito(event){
      this.recibirComic.emit(this.idComic);
  }

  deleteComic(){
      this.eliminarComic.emit(this.idComic);
  }

  constructor() {  }

  ngOnInit(): void {
  }

}
