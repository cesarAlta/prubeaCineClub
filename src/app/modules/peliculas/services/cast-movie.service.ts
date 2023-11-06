import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { rols } from 'src/app/models/Rol';

@Injectable({
  providedIn: 'root'
})
export class CastMovieService {
  get() {
   return of(rols)
  }

  constructor() { }
}
