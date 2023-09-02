import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { ViewsPeliculaComponent } from './pages/views-pelicula/views-pelicula.component';
import { AdminPeliculasComponent } from './pages/admin-peliculas/admin-peliculas.component';



@NgModule({
  declarations: [
    ViewsPeliculaComponent,
    AdminPeliculasComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
  ]
})
export class PeliculasModule { }
