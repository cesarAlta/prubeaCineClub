import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css'],
})
export class RecoverPasswordComponent implements OnInit {
  title: String = 'Cambiar contraseña';
  op: number = 1;
  submitted: boolean = false;
  private token: string | undefined | null;

  public recoverPassF: FormGroup | undefined;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private usuarioS: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recoverPassF = this.fb.group({
      password: ['', Validators.required],
    });
    this.route.queryParamMap.subscribe((param) => {
      this.token = param.get('token') ? param.get('token') : undefined;
    });
  }

  confirm() {
    this.submitted = true;
    if (!this.recoverPassF?.valid) return;
    if (this.token) {
      this.recoverPassF.get('newPassword1')?.value.trim(),
        this.usuarioS
          .confirmPassword({ ...this.recoverPassF.value }, this.token)
          .subscribe((res) => {
            this.router.navigateByUrl('us/login');
            console.log(res);
          });
    }
  }
}
