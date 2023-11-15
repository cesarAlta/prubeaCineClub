import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { ModalService } from 'src/app/services/modal.service';
import { DataService } from 'src/app/services/data.service';
import { Location } from '@angular/common';

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

  public recoverPassF!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private usuarioS: UsuarioService,
    private router: Router,
    private dataSvcs: DataService,
    private ms: ModalService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.dataSvcs.updateNavConfig('fixed');
    this.recoverPassF = this.fb.group({
      newPassword: ['', Validators.required],
      repeatNewPassword: ['', Validators.required]
    });
    this.recoverPassF.setValidators(this.passwordsMatchValidator())
    this.route.queryParamMap.subscribe((param) => {
      this.token = param.get('token') ? param.get('token') : undefined;
    });
  }
  ngOnDestroy(): void {
    this.dataSvcs.updateNavConfig('sticky');
  }
  confirm() {
    this.submitted = true;
    if (!this.recoverPassF?.valid) return;
    if (this.token) {

     const newPass =  this.recoverPassF.get('newPassword')?.value.trim();
        this.usuarioS
          .confirmPassword(newPass, this.token)
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
  passwordsMatchValidator() {
    return (): ValidationErrors | null => {
      const newPass = this.recoverPassF.get('newPassword')?.value;
      const repeatPass = this.recoverPassF.get('repeatNewPassword')?.value;

      return (newPass !== repeatPass) ? { mismatch: true }: null;
    };
  }  

  back() {
    this.location.back();
  }
}
