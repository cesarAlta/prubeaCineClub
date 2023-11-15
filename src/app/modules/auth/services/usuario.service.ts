import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map, of, tap } from 'rxjs';
import { Usuario, usuarios } from 'src/app/models/Auth/Usuario';
import { environment } from 'src/environments/environment.development';
import { Profile, profiles } from 'src/app/models/Auth/profile';
import { Profiles } from 'src/app/models/Auth/profiles';
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

  //Nuevo usuario
  post(newUser: Usuario) {
    return this.httpClient.post(this.URI + 'user', newUser);
  }

  //Recuperar contraseña: egenerar token y enviar mail
  postRecover(email: string) {
    return this.httpClient.post(this.URI + 'tokenPassword', { email: email });
  }
  //Guarda la nueva contraseña
  confirmPassword(newPass: any, token: string) {
    const param = new HttpParams().set('token', token);
    const pass = { password: newPass };
    return this.httpClient
      .post(this.URI + 'recoverPassword', pass, {
        params: param,
        observe: 'response',
      })
      .pipe(map((res) => Boolean(res.status == 200)));
  }
  //Cierra sesión
  logout(path?: string) {
    localStorage.removeItem(USER_LOCAL_ST_KEY);
    this.user.next(null);
    path ? this.route.navigateByUrl('us/login') : this.redirectToHome();
  }
  //Inicio de sesión
  logging(us: Usuario) {
    let user: Usuario;
    // credenciales a base64
    const credentials = btoa(`${us.email}:${us.password}`);
    const head = new HttpHeaders({
      Authorization: 'Basic ' + credentials,
    });

    return this.httpClient
      .get(this.URI + 'token', {
        headers: head,
        observe: 'response',
      })
      .pipe(
        map((res) => {
          if (res.status == 200) {
            /*
            El jwt consta de 3 partes, header, payload, signature. Los datos vienen en el payload,
            corto la cadena en '.' y tendría 0,1,2 => tomo el 1 (payload)
            */
            // const base64Url = res.body!.toString().split('.')[1];
            const us = this.getUserToken(res.body!.toString());
            /*
            Normalizo a base64 y remplazo los caracteres '-' y '_' para que sean compatibles con la
            decodificación.
            */
            // const base64 = base64Url.replace('-', '+').replace('_', '/');
            /*
            Decodifico la cadena base64 en una cadena JSON utilizo window.atob, y la conviero en JSON
            Defino un usuario tipo any para guardarlo temporalmente.
            */
            // const us: any = JSON.parse(window.atob(base64));
            user = this.userLogged(us);
            this.saveToken(res.body);
            this.pushNewUser(user);
          }
          return user;
        })
      );
  }
  getUserToken(t: any): JSON {
    /*
    El jwt consta de 3 partes, header, payload, signature. Los datos vienen en el payload,
    corto la cadena en '.' y tendría 0,1,2 => tomo el 1 (payload)
    */
    const base64Url = t.split('.')[1];
    /*
    Normalizo a base64 y remplazo los caracteres '-' y '_' para que sean compatibles con la
    decodificación. */
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    /*
    Decodifico la cadena base64 en una cadena JSON utilizo window.atob, y la conviero en JSON
    Defino un usuario tipo any para guardarlo temporalmente.
            */
    const us: any = JSON.parse(window.atob(base64));
    return us;
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

  verifyUser() {
    const t = localStorage.getItem(USER_LOCAL_ST_KEY);
    if (t) {
      const us = this.userLogged(this.getUserToken(t));
      this.pushNewUser(us);
    }
  }

  // verivicar con token
  // verifyUser() {
  //   this.httpClient.get(this.URI + 'verifyToken').subscribe((res) => {
  //     if (res) {
  //       const user: Usuario = this.userLogged(res);
  //       this.pushNewUser(user);
  //       console.log('sdf')
  //     }
  //   });
  // }

  private userLogged(resUser: any): Usuario {
    const userLogged = new Usuario();
    userLogged.firstName = resUser.nombre
      ? resUser.nombre
      : 'Dato no actualizado';
    userLogged.lastName = resUser.apellido
      ? resUser.apellido
      : 'Dato no actualizado';
    userLogged.email = resUser.email;
    userLogged.profile = resUser.profile;
    return userLogged;
  }
  // moficar usuario
  update(us: any) {
    return this.httpClient
      .put(this.URI + 'modifyUser', us)
      .pipe(tap((res) => console.log(res)));
  }
}
