import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Location } from "@angular/common";
import { ModalService } from "src/app/services/modal.service";
import { UsuarioService } from "../../services/usuario.service";
import { Usuario } from "src/app/models/Auth/Usuario";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  
  loginF: FormGroup | undefined; // form para loguearse.
  newUserF: FormGroup | undefined; //form para registrar nuevo usuario.
  recoverPassF: FormGroup | undefined; //form para recuperar constraseña
  showPass: boolean=false; // para hacer la contraseña visible en el input.
  title: string = "Iniciar sesión"; // titulo.
  op = 1; // opcion 1-> Ininiciar sesion, 2-> registrarse, 3-> recuprer pass.
  submitted: boolean = false; //booleano que sirve para saber cuando se envia el form

  constructor(
    public fb: FormBuilder,
    private location: Location,
    private modalS: ModalService,
    private usuarioS: UsuarioService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.loginF = this.fb.group({
      mail: [null, [Validators.required, Validators.email]],
      pass: [null, Validators.required],
    });
  }

  login() {
    this.submitted = true;
    if (this.loginF?.invalid) return;
    this.usuarioS
      .logging(this.loginF?.get("mail")?.value, this.loginF?.get("pass")?.value)
      .subscribe((res) => {
        if (res) {
          this.modalS.Alert(res.nombre?.toUpperCase(), "Bienvenido!", "s");
          this.router.navigateByUrl('/dashboard')
        } else {
          this.modalS.Alert("Contrseña o usuario incorrecto!", "UPS!", "w");
        }

      });

    let copyForm = this.loginF?.value;
    // this.authService.logging(copyForm);
  }
  back() {
    this.location.back();
  }

  togglePassVisibility(){
    this.showPass = !this.showPass;
  }

  register() {
    if (this.op != 1) {
      this.op = 1;
      this.title = "Iniciar sesión";
      this.loginF?.reset();
      this.submitted = false;
      return;
    }
    this.op = 2;
    this.title = "Regístrate!";
    this.submitted = false;
    this.newUserF = this.fb.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      contrasenia: ["", Validators.required],
    });
  }
  getRegister() {
    this.submitted = true;
    if (this.newUserF?.invalid) return;
    let copyform: Usuario = { ...this.newUserF?.value };
    this.usuarioS.post(copyform).subscribe((res) =>
      this.modalS.Alert(
        `Te enviamos un mail para confirmar tu registro.
       Muchas gracias ${res.nombre?.toUpperCase()}!`,
        "Un paso más y lo lográs!",
        "s"
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
    this.title = "Recuperá tu contraseña!";
    this.recoverPassF = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
    });
  }
  recoverPass() {
    this.submitted = true;
    if (this.recoverPassF?.invalid) return;
    this.usuarioS
      .postRecover(this.recoverPassF?.get("email")?.value)
      .subscribe((res) =>
        res
          ? this.modalS.Alert(
              `Te enviamos un mail para reestablecer la contraseña. 
      Abrí tu email y seguí las instrucciones.`,
              "Perfecto!",
              "s"
            )
          : this.modalS.Alert(
              "Algo salió mal. Ingresa tu mail nuevamente y verifica que sea correcto",
              "UPS!",
              "w"
            )
      );
  }
}
