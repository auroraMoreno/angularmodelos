import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/comic';


@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent implements OnInit {

  public comics: Array<Comic>;
  public mensaje: string;
  newComic: Comic = new Comic("","","");

  eliminarComic(event){
    var index = parseInt(event);
    this.comics.splice(index, 1);
  }

  //metodo insertar aqui y mandarselo a comic 
  insertarComic(c : Comic){
    this.comics.push(c);
    console.log(this.comics);
   
  }

  constructor() { 
     this.comics = [
            new Comic(
              "Spiderman",
              "https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg",
              "Hombre araña"
            ),
            new Comic(
              "Wolverine",
              "https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg",
              "Lobezno"
            ),
            new Comic(
              "Guardianes de la Galaxia",
              "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
              "Yo soy Groot"
            )
          ];

  }

  recibirComic( event ){
    var comicRecibido = this.comics[event];
    //this.comic=this.comics[event]; PARSEAR ID 
    /*this.comic.titulo = comicRecibido.titulo;
    this.comic.img = comicRecibido.img;
    this.comic.descripcion=comicRecibido.descripcion;*/
    console.log(comicRecibido.titulo);
    this.mensaje = "Comic recibido: " + comicRecibido.titulo;
  }

  ngOnInit(): void {
  }

}
