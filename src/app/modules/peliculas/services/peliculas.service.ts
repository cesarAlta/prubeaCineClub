import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { peliculas } from 'src/app/models/Pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor() { 
  }
  getByName(nombre:string){
    return of(peliculas.find(p=>p.title ==nombre));
  }
}
