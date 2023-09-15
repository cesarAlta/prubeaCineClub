import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, of } from 'rxjs';
import { Usuario, usuarios } from 'src/app/models/Auth/Usuario';

const USER_LOCAL_ST_KEY = 'userData';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  // private resurseUrl: string;
  private user = new BehaviorSubject<Usuario | null>(null);
  user$ = this.user.asObservable();
  islogged$ = this.user$.pipe(map(Boolean));
  userToken$: any;

  constructor(private route: Router, private httpClient: HttpClient) {
    // this.resurseUrl = 'http://localhost:8080/';
  }

  get(email: string, pass: string) {
    return of(usuarios.find((u) => u.email == email && u.contrasenia == pass));
  }
  post(copyform: Usuario) {
    usuarios.push(copyform);
    return of<Usuario>(copyform);
  }
  postRecover(value: string) {
    return of(usuarios.find((u) => u.email == value));
  }
  logout(){
    localStorage.removeItem('userData');
    this.user.next(null);
    this.route.navigateByUrl('/home');
  }

  // logging(u: Usuario) {
  //   let userToken;
  //   this.httpClient.post(this.resurseUrl, u).subscribe((res: any) => {
  //     userToken = res.jwToken;
  //     this.saveToken(res.jwToken);
  //     console.log(res)
  //     this.user.next(res);
  //   }),
  //     (error: HttpErrorResponse) => {
  //       console.log(error.error);
  //     };
  // }
  logging(email: string, pass: string) {
    
      let us = usuarios.find((u) => u.email == email && u.contrasenia == pass);
      if (us) {
        this.saveToken(JSON.stringify(us));
        this.user.next(us!);
      }
    
    return of(us);
    // let invitado: Usuario = new Usuario();
    // invitado.role = 'none';
    // this.pushNewUser(invitado);
    // this.saveToken(invitado.role)
  }
  private saveToken(t: any) {
    localStorage.setItem(USER_LOCAL_ST_KEY, t);
  }
  pushNewUser(u: Usuario) {
    this.user.next(u);
  }

  redirectToHome() {
    this.route.navigateByUrl('/');
  }
}
