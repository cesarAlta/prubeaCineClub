import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { map, take, tap } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from 'src/app/models/Auth/Usuario';
import { Profiles } from 'src/app/models/Auth/profiles';

export const HasRoleGuard = (route: Route) => {
  const usuarioService = inject(UsuarioService);
  const router = inject(Router);
  const alloweddRole = route.data?.['alloweddRole'];
  return usuarioService.user$.pipe(
    map((user) =>
      Boolean(user && alloweddRole.includes(Profiles[user!._profile]))
    )
  );
};
export const canMatchTeam: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  return inject(HasRoleGuard).canMatch(route);
};
