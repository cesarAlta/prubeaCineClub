import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IGenero } from 'src/app/components/interface/IGenero';
import { IPelicula } from 'src/app/components/interface/IPelicula';
import { PeliculasService } from 'src/app/modules/peliculas/services/peliculas.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent  implements OnInit {
  
  allMovies!: IPelicula[];
  genresList!: IGenero[];

  constructor(
    private moviesSvcs:PeliculasService,
    private router :Router,
    private route: ActivatedRoute,
  ){}
  ngOnInit(): void {    
    this.moviesSvcs.getAllMovies().subscribe(res=> this.allMovies = res);
    this.moviesSvcs.getGeneros().subscribe(res=> this.genresList = res)
  }
  goMovie(item: IPelicula) {
    this.moviesSvcs.selectMovie(item);
    this.router.navigate(['ver', item.nombre]);
  }

}
