import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HasRoleGuard } from './modules/auth/guard/has-role.guard';
import { UsuarioService } from './modules/auth/services/usuario.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'dashboard',
    // canMatch: [canMatchTeam],
    // data: { allowedRole: ['Admin'] },
    canActivate: [HasRoleGuard],
    data: { alloweddRole: 'Admin' },
    loadChildren: () =>
      import('./modules/private/private.module').then((m) => m.PrivateModule),
  },
  {
    path: 'peliculas',
    loadChildren: () =>
      import('./modules/peliculas/peliculas.module').then(
        (m) => m.PeliculasModule
      ),
  },
  {
    path: 'us',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 130],
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
