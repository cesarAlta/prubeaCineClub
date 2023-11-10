import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location, ViewportScroller } from '@angular/common';
import { ModalService } from 'src/app/services/modal.service';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from 'src/app/models/Auth/Usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginF!: FormGroup; // form para loguearse.
  newUserF: FormGroup | undefined; //form para registrar nuevo usuario.
  showPass: boolean = false; // para hacer la contraseña visible en el input.
  title: string = 'Iniciar sesión'; // titulo.
  op = 1; // opcion 1-> Ininiciar sesion, 2-> registrarse, 3-> recuprer pass.
  submitted: boolean = false; //booleano que sirve para saber cuando se envia el form
  option = 2;
  constructor(
    public fb: FormBuilder,
    private location: Location,
    private modalS: ModalService,
    private usuarioS: UsuarioService,
    private router: Router,
    private dataSvcs: DataService
  ) {}

  ngOnInit(): void {
    this.dataSvcs.updateNavConfig('fixed');
    this.loginF = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }
  //iniciar sesión
  login() {
    this.submitted = true;
    if (this.loginF?.invalid) return;
    const copyForm: Usuario = { ...this.loginF?.value };
    this.usuarioS.logging(copyForm).subscribe((res) => {
      if (res) {
        this.modalS.Alert(
          `Bienvenido ${res._firstName?.toLocaleUpperCase()}`,
          'Perfecto!',
          's'
        );
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
      profile: 'admin',
      password: ['', Validators.required],
    });
  }
  //confirmar registro
  getRegister() {
    this.submitted = true;
    if (this.newUserF?.invalid) return;
    let copyform: Usuario = { ...this.newUserF?.value };
    this.usuarioS
      .post(copyform)
      .subscribe((res) =>
        this.modalS.Alert(
          'Bienvenido a CineClubPlay!',
          `Registro completo!`,
          's'
        )
      );
    this.op = 1;
    this.submitted = false;
    this.newUserF?.reset();
  }
}
