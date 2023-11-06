import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { viewport } from '@popperjs/core';
import { ViewsPeliculaComponent } from './pages/views-pelicula/views-pelicula.component';
import { AdminPeliculasComponent } from './pages/admin-peliculas/admin-peliculas.component';
import { GenerosComponent } from './pages/admin-generos/generos/generos.component';
import { AdminGenerosComponent } from './pages/admin-generos/admin-generos.component';
import { CastMovieComponent } from './pages/cast-movie/cast-movie.component';
import { RatingMovieIncaaComponent } from './pages/rating-movie-incaa/rating-movie-incaa.component';
import { AwardsComponent } from './pages/Awards/awards/awards.component';

const routes: Routes = [  
   { path: 'ver/:name', component: ViewsPeliculaComponent },
    { path: 'adminPeliculas', component: AdminPeliculasComponent },
    { path: 'adminGeneros', component: AdminGenerosComponent },
    { path: 'reparto', component: CastMovieComponent },
    { path: 'clasificacion', component: RatingMovieIncaaComponent },
    { path: 'premios', component: AwardsComponent },
  ];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeliculasRoutingModule {}
