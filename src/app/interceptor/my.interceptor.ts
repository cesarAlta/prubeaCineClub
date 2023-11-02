import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, finalize, throwError } from 'rxjs';
import { UsuarioService } from '../modules/auth/services/usuario.service';
import { ModalService } from '../services/modal.service';
import { Router } from '@angular/router';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  constructor(
    private usuarioS: UsuarioService,
    private modalS: ModalService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    !this.modalS.lockedSreen() ? this.modalS.BloquearPantalla() : '';

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 401: {
            this.modalS.Alert('Debes iniciar sesión', 'UPS!', 'i');
            this.router.navigateByUrl('login');
            break;
          }

          case 403: {
            //modificar
            //Usuario: contraseña o usuario incorrecto
            if (error.error == 'not token today') {
              this.modalS.Alert('Contrseña o usuario incorrecto!', 'UPS!', 'w');
            }
            break;
          }
          case 404: {
            //usuario: no se encontro email para recuperar contraseña
            if (error.error == 'user not found') {
              this.modalS.Alert(
                'Correo no encontrado. Por favor, verifica tu dirección de correo.',
                'UPS!',
                'w'
              );
            }
            break;
          }
          //usuario recuperacion de pass: token no asociado a un usuario
          case 500: {
            if (error.error == `TypeError: Cannot read properties of undefined (reading 'ID_USUARIO')`) {
              this.modalS.Alert(
                `Expiró el tiempo de recuperación de contraseña.
                Seleccione nuevamente "Olvidé la contraseña"`,
                'UPS!',
                'd'
              );
              this.router.navigateByUrl('/us/login');
            }
          }
        }
        return throwError(() => new Error(error.error));
      }),
      finalize(() => this.modalS.DesbloquearPantalla())
    );
  }
}
