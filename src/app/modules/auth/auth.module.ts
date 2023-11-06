import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowForRolesDirective } from './directives/show-for-roles.directive';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { UsersComponent } from './pages/users/users.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    ShowForRolesDirective,
    RecoverPasswordComponent,
    UsersComponent,
    ForgotPasswordComponent
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
