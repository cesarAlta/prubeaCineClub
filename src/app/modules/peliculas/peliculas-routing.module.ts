import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { viewport } from '@popperjs/core';
import { ViewsPeliculaComponent } from './pages/views-pelicula/views-pelicula.component';
import { AdminPeliculasComponent } from './pages/admin-peliculas/admin-peliculas.component';

const routes: Routes = [  
   { path: 'pelicula', component: ViewsPeliculaComponent },
    { path: 'adminPeliculas', component: AdminPeliculasComponent },
  ];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeliculasRoutingModule {}
