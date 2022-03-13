import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MesesComponent } from './components/meses/meses.component';
import { DiasComponent } from './components/dias/dias.component';
import { ComidasComponent } from './components/comidas/comidas.component';
import { CiudadesComponent } from './components/ciudades/ciudades.component';

@NgModule({
  declarations: [
    AppComponent,
    MesesComponent,
    DiasComponent,
    ComidasComponent,
    CiudadesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
