import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { viewport } from '@popperjs/core';
import { ViewsPeliculaComponent } from './pages/views-pelicula/views-pelicula.component';
import { AdminPeliculasComponent } from './pages/admin-peliculas/admin-peliculas.component';
import { GenerosComponent } from './pages/admin-generos/generos/generos.component';
import { AdminGenerosComponent } from './pages/admin-generos/admin-generos.component';

const routes: Routes = [  
   { path: 'ver/:name', component: ViewsPeliculaComponent },
    { path: 'adminPeliculas', component: AdminPeliculasComponent },
    { path: 'adminGeneros', component: AdminGenerosComponent },
  ];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeliculasRoutingModule {}
