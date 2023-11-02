import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private navConfig = new BehaviorSubject<string>('sticky');
  $navConfig = this.navConfig.asObservable();

  constructor() { }

  updateNavConfig(nav: string){
    this.navConfig.next(nav);
  }
}
