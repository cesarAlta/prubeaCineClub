import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location, ViewportScroller } from '@angular/common';
import { ModalService } from 'src/app/services/modal.service';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from 'src/app/models/Auth/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginF: FormGroup | undefined; // form para loguearse.
  newUserF: FormGroup | undefined; //form para registrar nuevo usuario.
  recoverPassF: FormGroup | undefined; //form para recuperar constraseña
  showPass: boolean = false; // para hacer la contraseña visible en el input.
  title: string = 'Iniciar sesión'; // titulo.
  op = 1; // opcion 1-> Ininiciar sesion, 2-> registrarse, 3-> recuprer pass.
  submitted: boolean = false; //booleano que sirve para saber cuando se envia el form

  constructor(
    public fb: FormBuilder,
    private location: Location,
    private modalS: ModalService,
    private usuarioS: UsuarioService,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToAnchor('logininit');
    this.loginF = this.fb.group({
      mail: [null, [Validators.required, Validators.email]],
      pass: [null, Validators.required],
    });
  }
  //iniciar sesión
  login() {
    this.submitted = true;
    if (this.loginF?.invalid) return;
    const copyForm = {... this.loginF?.value}
    this.usuarioS
      .logging(copyForm.mail, copyForm.pass)
      .subscribe((res) => {
        if (res) {
          this.modalS.Alert('Este es tu espacio de trabajo', 'Bienvenido!', 's');
          this.router.navigateByUrl('/dashboard');
        }
      });
  }
  back() {
    this.location.back();
  }

  togglePassVisibility() {
    this.showPass = !this.showPass;
  }

  //opcion nuevo usuario
  register() {
    if (this.op != 1) {
      this.op = 1;
      this.title = 'Iniciar sesión';
      this.loginF?.reset();
      this.submitted = false;
      return;
    }
    this.op = 2;
    this.title = 'Regístrate!';
    this.submitted = false;
    this.newUserF = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      profile:'admin',
      password: ['', Validators.required],
    });
  }
  //confirmar registro
  getRegister() {
    this.submitted = true;
    if (this.newUserF?.invalid) return;
    let copyform: Usuario = { ...this.newUserF?.value };
    this.usuarioS.post(copyform).subscribe((res) =>
      this.modalS.Alert(
        'Bienvenido a CineClubPlay!',`Registro completo!`,
        's'
      )
    );
    this.op = 1;
    this.submitted = false;
    this.newUserF?.reset();
  }
  forgotPass() {
    this.op = 3;
    this.newUserF?.reset();
    this.submitted = false;
    this.title = 'Recuperá tu contraseña!';
    this.recoverPassF = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
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
            `Te enviamos un mail para reestablecer la contraseña. 
      Abrí tu email y seguí las instrucciones.`,
            'Perfecto!',
            's'
          );
      });
  }
}
