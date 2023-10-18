import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { Usuario, usuarios } from 'src/app/models/Auth/Usuario';
import { environment } from 'src/environments/environment.development';

const USER_LOCAL_ST_KEY = 'userData';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private URI: string = environment.api;
  private user = new BehaviorSubject<Usuario | null>(null);
  user$ = this.user.asObservable();
  islogged$ = this.user$.pipe(map(Boolean));
  userToken$: any;

  constructor(private route: Router, private httpClient: HttpClient) {}

  get(email: string, pass: string) {
    return of(usuarios.find((u) => u._email == email && u._password == pass));
    // return this.httpClient.post(this.URI, { email, pass} )
  }

  //nuevo usuario
  post(newUser: Usuario) {
    return this.httpClient.post(this.URI + 'user', newUser);
  }

  //Recuperar contraseña: egenerar token y enviar mail
  postRecover(email: string) {
    return this.httpClient.post(this.URI + 'tokenPassword', { email: email });
  }
  confirmPassword(newPass: any, token: string) {
    const param = new HttpParams().set('token', token);
    return this.httpClient.post(this.URI + 'recoverPassword', newPass,{params:param});
  }
  logout() {
    localStorage.removeItem(USER_LOCAL_ST_KEY);
    this.user.next(null);
    this.redirectToHome();
  }

  logging(email: string, pass: string) {
    let user: Usuario | undefined;

    // credenciales a base64
    const credentials = btoa(email + ':' + pass);
    const head = new HttpHeaders({
      Authorization: 'Basic ' + credentials,
    });
    const params = new HttpParams();
    params.set('email', email);
    params.set('password', pass);

    return this.httpClient
      .get(this.URI + 'token', {
        params: params,
        headers: head,
        observe: 'response',
      })
      .pipe(
        map((res) => {
          if (res.status == 200) {
            //deberia devolver un usuario
            console.log(res);
            user = new Usuario();
            user.firstName = 'Usuario';
            user.lastName = 'Unico';
            user.profile = 'Admin';
            this.user.next(user);
            this.saveToken(res.body);
          }
          return user;
        })
      );
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
  verifyUser(t: string) {
  //   let param = new HttpParams();
  //   param.set('token', t);
  //   this.httpClient
  //     .get(this.URI + 'verifyToken', { params: param })
  //     .subscribe((res) => {
  //       console.log(res);
  //     });
  }
}
