import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { ViewsPeliculaComponent } from './pages/views-pelicula/views-pelicula.component';
import { AdminPeliculasComponent } from './pages/admin-peliculas/admin-peliculas.component';
import { ValuacionComponent } from './components/valuacion/valuacion.component';

import { AdminGenerosComponent } from './pages/admin-generos/admin-generos.component';
import { GenerosComponent } from './pages/admin-generos/generos/generos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AwardsComponent } from './pages/Awards/awards/awards.component';
import { RatingMovieIncaaComponent } from './pages/rating-movie-incaa/rating-movie-incaa.component';
import { CastMovieComponent } from './pages/cast-movie/cast-movie.component';


@NgModule({
  declarations: [
    ViewsPeliculaComponent,
    AdminPeliculasComponent,
    ValuacionComponent,
    GenerosComponent,
    AdminGenerosComponent,
    AwardsComponent,
    RatingMovieIncaaComponent,
    CastMovieComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PeliculasRoutingModule,
    NgOptimizedImage,
    NgbPaginationModule
  ]
})
export class PeliculasModule { }
