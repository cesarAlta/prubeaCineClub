import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowForRolesDirective } from './directives/show-for-roles.directive';


@NgModule({
  declarations: [
    LoginComponent,
    ShowForRolesDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,    
    AuthRoutingModule
  ],
  exports:[ ShowForRolesDirective]
})
export class AuthModule { }
