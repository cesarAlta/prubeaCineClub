import { Component, OnInit } from '@angular/core';
import { Pelicula, peliculas } from 'src/app/models/Pelicula';

@Component({
  selector: 'app-carousel-mini',
  templateUrl: './carousel-mini.component.html',
  styleUrls: ['./carousel-mini.component.css']
})
export class CarouselMiniComponent{

  movies: Pelicula[] = peliculas.slice(0,3);
  constructor(){}
}
