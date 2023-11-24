import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPelicula } from 'src/app/components/interface/IPelicula';
import { peliculas } from 'src/app/models/Pelicula';
import { PeliculasService } from 'src/app/modules/peliculas/services/peliculas.service';

@Component({
  selector: 'app-genres-movies',
  templateUrl: './genres-movies.component.html',
  styleUrls: ['./genres-movies.component.css'],
})
export class GenresMoviesComponent implements OnInit {
  allMovies!: IPelicula[];
  searchMovieOrDir: string | undefined;

  constructor(
    private moviesSvcs: PeliculasService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      if (param.get('name')) {
        this.moviesSvcs
          .getMovieXGenre(param.get('name'))
          .subscribe((res) => (this.allMovies = res));
      }
      if (param.get('movie')) {
        this.moviesSvcs
          .searchMovieOrDir(param.get('movie')!, 1, 20)
          .subscribe((res) => {
            this.searchMovieOrDir = param.get('movie')!;
            this.allMovies = res;
          });
      }
    });
  }
  goMovie(item: IPelicula) {
    this.moviesSvcs.selectMovie(item);
    this.router.navigate(['ver', item.nombre]);
  }
  clean(){
    this.router.navigateByUrl('peliculas/genero/todas')
  }
}
