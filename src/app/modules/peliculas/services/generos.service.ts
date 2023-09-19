import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { generos } from 'src/app/models/Genero';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  constructor() { }

  get(){
    return of(generos)
  }
}
