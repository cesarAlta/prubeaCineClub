import { Injectable, inject } from '@angular/core';
import {  ActivatedRouteSnapshot, CanMatch, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, map, take, tap } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';


export const AuthGuard =()=>{
  const usuarioService = inject(UsuarioService)
  const router = inject(Router)
  return usuarioService.islogged$.pipe(
    take(1),
    tap((isLoggedIn)=> !isLoggedIn? router.navigate(['/login']):true)
  )
}
export const canMatchTeam: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  return inject(HasRoleGuard).canMatch(route);
};
@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard {
  constructor(private authService: UsuarioService) {}

  
  canMatch(route: Route): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    return this.hasRole(route);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean >{
    return this.hasRole(route);
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.hasRole(route);
  }

  private hasRole(route: Route | ActivatedRouteSnapshot) {
    const alloweddRole = route.data?.['allowedRole'];

    return this.authService.user$.pipe(
      map((user) => Boolean(user && alloweddRole.includes(user._nameProfile))),
      tap((hasRole) => hasRole === false && alert('Acceso denegado'))
    );
  }

}
