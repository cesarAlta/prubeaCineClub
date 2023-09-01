import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
private optview= new BehaviorSubject<number>(1);
optview$ = this.optview.asObservable();

  constructor() { }

  upDateOption(num:number){
    this.optview.next(num);
  }
}
