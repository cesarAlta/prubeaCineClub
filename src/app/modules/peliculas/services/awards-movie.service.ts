import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AwardsList } from 'src/app/models/Awards';

@Injectable({
  providedIn: 'root',
})
export class AwardsMovieService {
  constructor() {}

  get() {
    return of(AwardsList);
  }
}
