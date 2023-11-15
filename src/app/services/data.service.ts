import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private URI: string = environment.api;

  //opciones de video
  private optVideoView = new BehaviorSubject<number>(1);

  //cambio estilo navbar
  private navConfig = new BehaviorSubject<string>('sticky');

  //condig dash
  private onlyDash = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  //obtengo la url del video del home
  getVideo() {
    return this.http.get(this.URI + 'getFrontPageVideo').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  //obtengo el observable de las opciones del video
  get optVideoView$(): Observable<number> {
    return this.optVideoView.asObservable();
  }
  //actualizo la opcion de vista
  upDateOption(num: number) {
    this.optVideoView.next(num);
  }

  //observable cambio estilo navbar
  get navConfig$(): Observable<string> {
    return this.navConfig.asObservable();
  }
  //actualiza el observable estilo navbar
  updateNavConfig(nav: string) {
    this.navConfig.next(nav);
  }
  //condig dash
  get onlyDash$(): Observable<boolean> {
    return this.onlyDash.asObservable();
  }
  updateOnlyDash(v: boolean) {
    this.onlyDash.next(v);
  }
}
