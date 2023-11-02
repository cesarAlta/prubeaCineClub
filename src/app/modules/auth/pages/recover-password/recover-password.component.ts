import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { UtilsService } from 'src/app/services/utils.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css'],
})
export class RecoverPasswordComponent implements OnInit, OnDestroy {
  title: String = 'Cambiar contraseña';
  op: number = 1;
  submitted: boolean = false;
  private token: string | undefined | null;

  public recoverPassF: FormGroup | undefined;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private usuarioS: UsuarioService,
    private router: Router,
    private utilService: UtilsService,
    private ms: ModalService
  ) {}

  ngOnInit(): void {
    this.utilService.updateNavConfig('fixed');
    this.recoverPassF = this.fb.group({
      password: ['', Validators.required],
    });
    this.route.queryParamMap.subscribe((param) => {
      this.token = param.get('token') ? param.get('token') : undefined;
    });
  }
  ngOnDestroy(): void {
    this.utilService.updateNavConfig('sticky');
  }
  confirm() {
    this.submitted = true;
    if (!this.recoverPassF?.valid) return;
    if (this.token) {
      this.recoverPassF.get('newPassword1')?.value.trim(),
        this.usuarioS
          .confirmPassword({ ...this.recoverPassF.value }, this.token)
          .subscribe((res) => {
            if (res) {
              this.ms.Alert(
                'Tu contraseña se actualizó con éxito!',
                'Perfecto!',
                's'
              );
              this.router.navigateByUrl('us/login');
            }
          });
    }
  }
}
