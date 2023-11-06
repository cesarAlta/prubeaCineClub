import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { calificaciones } from 'src/app/models/Calificaion';

@Injectable({
  providedIn: 'root'
})
export class RatingMovieServiceService {

  constructor() { }

  get(){
    return of(calificaciones)
  }
}
