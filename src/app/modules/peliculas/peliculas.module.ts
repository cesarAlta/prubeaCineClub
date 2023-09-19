import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { ViewsPeliculaComponent } from './pages/views-pelicula/views-pelicula.component';
import { AdminPeliculasComponent } from './pages/admin-peliculas/admin-peliculas.component';
import { ValuacionComponent } from './components/valuacion/valuacion.component';

import { AdminGenerosComponent } from './pages/admin-generos/admin-generos.component';
import { GenerosComponent } from './pages/admin-generos/generos/generos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ViewsPeliculaComponent,
    AdminPeliculasComponent,
    ValuacionComponent,
    GenerosComponent,
    AdminGenerosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PeliculasRoutingModule,
  ]
})
export class PeliculasModule { }
