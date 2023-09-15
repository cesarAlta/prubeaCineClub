import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula, peliculas } from 'src/app/models/Pelicula';

@Component({
  selector: 'app-views-pelicula',
  templateUrl: './views-pelicula.component.html',
  styleUrls: ['./views-pelicula.component.css'],
})
export class ViewsPeliculaComponent implements OnInit {
  triler: boolean = false; 
  @Input()ver: string= '';
  @Output() emitPeli = new EventEmitter<Pelicula>()

  pelis: Pelicula[] = peliculas.concat(peliculas);

  constructor(){}

  ngOnInit(): void {}
  showTriler() {
    this.triler = !this.triler;
    this.triler ? window.scrollBy(0, 550) : window.scrollBy(0, -550);
  }

  publicar(item:Pelicula){
    let peli = this.pelis.find(p=>p.id ==item.id);
    peli? peli.publicado=!peli.publicado:''

  }
  editar(item:Pelicula){
    this.emitPeli.emit(item);
    

  }
}
