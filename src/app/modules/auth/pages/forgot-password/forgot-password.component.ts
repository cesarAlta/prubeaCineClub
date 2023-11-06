import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  recoverPassF!: FormGroup; //form para recuperar constraseña
  showPass: boolean = false; // para hacer la contraseña visible en el input.
  title: string = 'Recuperá tu contraseña!'; // titulo.
  op = 3; // opcion 1-> Ininiciar sesion, 2-> registrarse, 3-> recuprer pass.
  submitted: boolean = false; //booleano que sirve para saber cuando se envia el form

  constructor(
    public fb: FormBuilder,
    private location: Location,
    private modalS: ModalService,
    private usuarioS: UsuarioService,
    private utilService: UtilsService
  ) {}

  ngOnInit(): void {
    this.utilService.updateNavConfig('fixed');
    this.recoverPassF = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }


  back() {
    this.location.back();
  }

  togglePassVisibility() {
    this.showPass = !this.showPass;
  }

  //recuperar contraseña
  recoverPass() {
    this.submitted = true;
    if (this.recoverPassF?.invalid) return;
    this.usuarioS
      .postRecover(this.recoverPassF?.get('email')?.value)
      .subscribe((res) => {
        if (res)
          this.modalS.Alert(
            `Revisa tu correo para restablecer la contraseña. Sigue las instrucciones en tu email.`,
            'Perfecto!',
            's'
          );
      });
  }
}
