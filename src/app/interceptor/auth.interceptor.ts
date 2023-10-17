import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from '../modules/auth/services/usuario.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private usService: UsuarioService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('userData');
    if (token) {
      request.clone({
        setHeaders: { authorization: `Bearer ${token}` },
      });
    }
    return next.handle(request);
  }
}
