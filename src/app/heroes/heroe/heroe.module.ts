import { NgModule } from "@angular/core";
import { HeroeComponent } from "./componentes/componente/heroe.component";

@NgModule({
  declarations: [
    HeroeComponent,
  ],
  exports: [
    HeroeComponent,
  ],
})

export class HeroeModule {

}