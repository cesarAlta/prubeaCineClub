import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewMovieHomeComponent } from './home/pages/view-movie-home/view-movie-home.component';
import { AllMoviesComponent } from './home/pages/all-movies/all-movies.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'ver/:name', component: ViewMovieHomeComponent},
  {path:'peliculas', component: AllMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
