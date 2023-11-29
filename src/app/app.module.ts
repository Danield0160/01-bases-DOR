import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroeModule } from './heroes/heroe/heroe.module';

import { AppComponent } from './app.component';
import { ListadoComponent } from './heroes/listado/listado.component';
@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    HeroeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
