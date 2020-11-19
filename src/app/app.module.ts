import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumerosrandomComponent } from './components/numerosrandom/numerosrandom.component';
import { ComporbarconjeturaComponent } from './components/comporbarconjetura/comporbarconjetura.component';
import {routing, appRoutingProviders} from './app.routing';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { CocheComponent } from './components/coche/coche.component';
import { ConcesionarioComponent } from './components/concesionario/concesionario.component';
import { HijocontadorComponent } from './components/hijocontador/hijocontador.component';
import { PadrecontadoresComponent } from './components/padrecontadores/padrecontadores.component';
import { ComicComponent } from './components/comic/comic.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NumerosrandomComponent,
    ComporbarconjeturaComponent,
    ListaproductosComponent,
    CocheComponent,
    ConcesionarioComponent,
    HijocontadorComponent,
    PadrecontadoresComponent,
    ComicComponent,
    LibreriaComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
