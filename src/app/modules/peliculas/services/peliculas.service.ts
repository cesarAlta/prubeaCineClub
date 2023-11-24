import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, of, tap } from 'rxjs';
import { IGenero } from 'src/app/components/interface/IGenero';
import { IPelicula } from 'src/app/components/interface/IPelicula';
import { IRol } from 'src/app/components/interface/IRol';
import { peliculas } from 'src/app/models/Pelicula';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  private movies = new BehaviorSubject<IPelicula[]>([]);
  movies$ = this.movies.asObservable();
  private movieSize = new BehaviorSubject<number>(0);
  movieSize$ = this.movieSize.asObservable();

  private viewMovie = new BehaviorSubject<IPelicula | undefined>(undefined);
  viewMovie$ = this.viewMovie.asObservable();

  private premiereMovie = new BehaviorSubject<IPelicula[]>([]);
  premiereMovie$ = this.premiereMovie.asObservable();

  private mostViewedMovie = new BehaviorSubject<IPelicula[]>([]);
  mostViewedMovie$ = this.mostViewedMovie.asObservable();

  private allMovieList!: IPelicula[];

  private URI!: string;

  constructor(private httpClient: HttpClient) {
    this.URI = environment.api;
  }
  selectMovie(m: IPelicula) {
    this.viewMovie.next(m);
  }

  getAll() {
    this.httpClient.get<IPelicula[]>(this.URI + 'movies').subscribe((res) => {
      this.allMovieList = res;
      this.searchByName('', 1);
    });
  }
  getAllMovies() {
    return this.httpClient.get<IPelicula[]>(this.URI + 'movies');
  }
  //Obtiene todas las peliculas y emnite observables para las mas visatas y estrenos.
  getAllHome() {
    this.getAllMovies().subscribe((res) => {
      this.allMovieList = res;
      this.mostViewedMovie.next(this.allMovieList.slice(0, 10));
      this.premiereMovie.next(this.allMovieList.filter((m) => m.estreno));
      this.movies.next(res);
    });
  }
  getMovieXGenre(genre: any) {
    return this.httpClient
      .get<IPelicula[]>(this.URI + 'movies')
      .pipe(
        map((res) =>
          genre != 'todas' ? res.filter((m) => m.generos.includes(genre)) : res
        )
      );
  }
  getGeneros() {
    return this.httpClient.get<IGenero[]>(this.URI + 'genres');
  }
  getRoles() {
    return this.httpClient.get<IRol[]>(this.URI + 'roles');
  }
  getByName(nombre: string) {
    return this.getAllMovies().pipe(
      map((res) => res.find((m) => m.nombre == nombre))
    );
  }
  post(movie: any, portada: File, cartelera: File) {
    let generos: string | undefined;
    movie.generos?.forEach((g: any) => {
      if (!generos) {
        generos = `${g.nombre}`;
        return;
      }
      generos += `,${g.nombre}`;
    });

    const formData = new FormData();

    formData.append('nombre', movie.nombre);
    formData.append('duracion', movie.duracion);
    formData.append('sinopsis', movie.sinopsis);
    formData.append('generos', generos!);
    formData.append('pais', movie.pais);
    formData.append('anioEstreno', movie.anioEstreno);
    formData.append('idioma', movie.idioma);
    formData.append('soporte', movie.soporte);
    formData.append('calificacion', movie.calificacion);
    formData.append('estreno', portada);
    formData.append('poster', cartelera);
    formData.append('premios', JSON.stringify(movie.premios));
    formData.append('elenco', JSON.stringify(movie.elenco));
    formData.append('linkPelicula', movie.linkPelicula);
    formData.append('linkTrailer', movie.linkTrailer);

    return this.httpClient.post(this.URI + 'createMovie', formData);
    // return of(true);
  }
  put(movie: any, portada: any, cartelera: any) {
    let generos: string | undefined;
    movie.generos?.forEach((g: any) => {
      if (!generos) {
        generos = `${g.nombre}`;
        return;
      }
      generos += `,${g.nombre}`;
    });

    const formData = new FormData();

    formData.append('idPelicula', movie.idPelicula);
    formData.append('nombre', movie.nombre);
    formData.append('duracion', movie.duracion);
    formData.append('sinopsis', movie.sinopsis);
    formData.append('generos', generos!);
    formData.append('pais', movie.pais);
    formData.append('anioEstreno', movie.anioEstreno);
    formData.append('idioma', movie.idioma);
    formData.append('soporte', movie.soporte);
    formData.append('calificacion', movie.calificacion);
    if (portada) formData.append('estreno', portada);
    if (cartelera) formData.append('poster', cartelera);
    formData.append('premios', JSON.stringify(movie.premios));
    formData.append('elenco', JSON.stringify(movie.elenco));
    formData.append('linkPelicula', movie.linkPelicula);
    formData.append('linkTrailer', movie.linkTrailer);

    return this.httpClient.post(this.URI + 'updateMovie', formData);
  }
  updateEstreno(item: any) {
    return this.httpClient.post(this.URI + 'switchBooleanEstreno', item);
  }
  updatePublicada(item: any) {
    return this.httpClient.post(this.URI + 'switchBooleanOculta', item);
  }

  searchByName(searchName: string, page: number) {
    let moviess: IPelicula[] = [];
    if (searchName) {
      this.allMovieList.forEach((m) => {
        if (m.nombre.toUpperCase().includes(searchName.toUpperCase())) {
          moviess.push(m);
        }
      });
      this.allMovieList.forEach((m) => {
        m.elenco.forEach((e) => {
          if (
            e.nombreRol === 'DIRECTOR' &&
            (e.nombre.toUpperCase().includes(searchName.toUpperCase()) ||
              e.apellido.toUpperCase().includes(searchName.toUpperCase()))
          )
            moviess.push(m);
        });
      });
    } else {
      moviess = this.allMovieList;
    }

    const movieSize = moviess.length;
    moviess = moviess.slice((page - 1) * 10, page + 9);

    this.movies.next(moviess);
    this.movieSize.next(movieSize);
  }

  private movieSearch= new BehaviorSubject<IPelicula[]>([]);
  movieSearch$ = this.movieSearch.asObservable();
  movieSearchSize$ = this.movieSearch$.pipe(map(res=>res.length))
  
  searchMovieOrDir(searchName: string, page: number, size: number) {
    console.log("busqueda")
    let moviess: IPelicula[] = [];

   return this.getAllMovies().pipe(
      map((m) => {
        m.forEach((movie) => {
          if (movie.nombre.toUpperCase().includes(searchName.toUpperCase())) {
            moviess.push(movie);
          }
        });
        m.forEach((movie) => {
          movie.elenco.forEach((eMovie) => {
            if (
              eMovie.nombreRol === 'DIRECTOR' &&
              (eMovie.nombre.toUpperCase().includes(searchName.toUpperCase()) ||
                eMovie.apellido
                  .toUpperCase()
                  .includes(searchName.toUpperCase()))
            )
              moviess.push(movie);
          });
        });

        const movieSize = moviess.length;
        moviess = moviess.slice((page - 1) * 10, page + 9);
        console.log(moviess)
        return moviess;

        // this.movieSearch.next(moviess);
      })
    );
  }
}
