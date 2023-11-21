import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPelicula } from 'src/app/components/interface/IPelicula';
import { PeliculasService } from 'src/app/modules/peliculas/services/peliculas.service';

@Component({
  selector: 'app-view-movie-home',
  templateUrl: './view-movie-home.component.html',
  styleUrls: ['./view-movie-home.component.css'],
})
export class ViewMovieHomeComponent implements OnInit {
  triler: boolean = false;

  movieSel!: IPelicula;
  director!: string[];
  actores!: string[];

  constructor(
    private scrollTo: ViewportScroller,
    private route: ActivatedRoute,
    private moviesSvcs: PeliculasService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) =>
      this.moviesSvcs.getByName(param.get('name')!).subscribe((resp) => {
        this.movieSel = resp!;
        this.getCast();
      })
    );
  }
  getCast() {
    this.director = this.movieSel.elenco
      .filter((e) => e.nombreRol === 'DIRECTOR')
      .map((res) => `${res.nombre}, ${res.apellido}`);
    this.actores = this.movieSel.elenco
      .filter((e) => e.nombreRol === 'ACTOR' || e.nombreRol === 'ACTRIZ')
      .map((res) => `${res.nombre}, ${res.apellido}`);
  }
  showTriler() {
    this.triler = !this.triler;
    // this.triler ? window.scrollBy(0, 550) : window.scrollBy(0, -550);
    this.triler
      ? this.scrollTo.scrollToAnchor('trailerMovie')
      : this.scrollTo.scrollToPosition([0, 0]);
  }
  showMovie(){
    this.scrollTo.scrollToAnchor('Movie')
  }
}
