import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';
import { IGenero } from 'src/app/components/interface/IGenero';
import { IPelicula } from 'src/app/components/interface/IPelicula';
import { IPremio } from 'src/app/components/interface/IPremio';
import { IRol } from 'src/app/components/interface/IRol';
import { peliculas } from 'src/app/models/Pelicula';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  private URI!: string;

  constructor(private httpClient: HttpClient) {
    this.URI = environment.api;
  }

  getAll() {
    return this.httpClient.get<IPelicula>(this.URI + 'movies');
  }
  getGeneros() {
    return this.httpClient.get<IGenero[]>(this.URI + 'genres');
  }
  getRoles() {
    return this.httpClient.get<IRol[]>(this.URI + 'roles');
  }
  getByName(nombre: string) {
    return of(peliculas.find((p) => p.title == nombre));
  }
  put(movie: any) {
    const formData = new FormData();
    formData.append('body', movie);
    formData.append('poster', movie);
    formData.append('estreno', movie);

    return this.httpClient
      .post(this.URI + 'createMovie', formData)
      .pipe(tap((res) => console.log(res)));
  }
}
