import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
private optview= new BehaviorSubject<number>(1);
optview$ = this.optview.asObservable();
private apiUrl = 'https://api.vimeo.com'; // La URL base de la API de Vimeo

  constructor(private http: HttpClient) { }

  upDateOption(num:number){
    this.optview.next(num);
  }
//   getTutorial(): Observable<any> {
//     // Define las cabeceras con tu token de acceso
//     const headers = new HttpHeaders({
//       'Authorization': 'Bearer {c1d08a7c693f63152ca225471b550085}' // Reemplaza {tu_token_de_acceso} con tu token real
//     });

//     // Realiza la solicitud GET a la API de Vimeo
//     return this.http.get(`${this.apiUrl}/tutorial`, { headers });
//   }
}
