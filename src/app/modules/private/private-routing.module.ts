import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ConfigPageComponent } from './pages/config-page/config-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'peliculas',
        loadChildren: () =>
          import('../peliculas/peliculas.module').then(
            (m) => m.PeliculasModule
          ),
      },
      { path: 'config', component: ConfigPageComponent },
      {
        path: '',
        loadChildren: () =>
          import('../auth/auth.module').then((m) => m.AuthModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
