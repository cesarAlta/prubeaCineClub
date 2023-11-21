import { Component, OnInit } from '@angular/core';
import { IPelicula } from 'src/app/components/interface/IPelicula';
import { PeliculasService } from 'src/app/modules/peliculas/services/peliculas.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent  implements OnInit {
  
  allMovies!: IPelicula[];

  constructor(
    private moviesSvcs:PeliculasService
  ){}
  ngOnInit(): void {
    
    this.moviesSvcs.getAllMovies().subscribe(res=> this.allMovies = res)
  }
  

}
