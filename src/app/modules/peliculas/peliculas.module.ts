import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { ViewsPeliculaComponent } from './pages/views-pelicula/views-pelicula.component';
import { AdminPeliculasComponent } from './pages/admin-peliculas/admin-peliculas.component';
import { ValuacionComponent } from './components/valuacion/valuacion.component';



@NgModule({
  declarations: [
    ViewsPeliculaComponent,
    AdminPeliculasComponent,
    ValuacionComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
  ]
})
export class PeliculasModule { }
