import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {
  heroes: string [] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América', 'Visión'];

  heroesBorrados: string[] = [];

  borrarHeroe() {
    let primero = this.heroes[0]
    if(primero){
      this.heroes.shift()
      this.heroesBorrados.push( primero) ;
    }
  }
  restaurar(){
    let ultimo:string = this.heroesBorrados[this.heroesBorrados.length-1] || ""
    if (ultimo){
      this.heroesBorrados.pop()
      this.heroes.unshift( ultimo) ;
    }
  }
  restaurarTodo(){
    this.heroes= ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América', 'Visión'];
    this.heroesBorrados =[]
  }
}