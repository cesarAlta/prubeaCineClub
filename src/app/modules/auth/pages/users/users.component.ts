import { Component, OnDestroy, OnInit } from '@angular/core';
import { Usuario, usuarios } from 'src/app/models/Auth/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Profiles } from 'src/app/models/Auth/profiles';
import { group } from '@angular/animations';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnDestroy {
  user!: Usuario;
  opSel: number | undefined;
  fgUserLogged!: FormGroup;
  fgEdit: FormGroup | undefined;
  editPlaceHolder: string = '...';
  subTitle: string = '...';
  showPass: boolean = false;
  submitted: boolean = false;
  matchPassword: boolean = true;

  constructor(
    private us: UsuarioService,
    private fb: FormBuilder,
    private dataSvcs: DataService,
    private route: Router
  ) {}
  ngOnDestroy(): void {
    this.dataSvcs.updateOnlyDash(true);
  }
  ngAfterViewInit(): void {
    this.dataSvcs.updateOnlyDash(false);
  }
  ngOnInit() {
    this.us.user$.subscribe((uslog) => {
      this.user = uslog!;
    });

    this.fgUserLogged = this.fb.group({
      firstName: [
        this.user._firstName ? this.user._firstName : 'No se cargaron datos...',
      ],
      lastName: [
        this.user._lastNAme ? this.user._lastNAme : 'No se cargaron datos...',
      ],
      email: [this.user._email],
      profile: [
        this.user._nameProfile
          ? Profiles[this.user._nameProfile]
          : 'loading...',
      ],
      password: [' contraseña a editar'],
    });

    this.fgUserLogged.disable();
  }
  optionEdit = [
    { id: 1, name: 'Nombre', ph: 'Nombre' },
    { id: 2, name: 'Apellido', ph: 'Apellido' },
    { id: 3, name: 'Contraseña', ph: 'Nueva contraseña' },
  ];
  //Crea dinamicamente el campo a editar con un formGroup
  edit(op: number) {
    this.opSel = op;
    let opt = this.optionEdit.find((r) => r.id == op);
    this.editPlaceHolder = opt!.ph;
    this.subTitle = opt!.name;
    if (op == 3) {
      this.fgEdit = this.fb.group({
        currentPassword: ['', Validators.required],
        newPassword: ['', Validators.required],
        repeatNewPassword: ['', Validators.required],
      });
      this.fgEdit.setValidators(this.passwordsMatchValidator(this.fgEdit));
    } else {
      const n = op==1? this.user._firstName: this.user._lastNAme;
      this.fgEdit = this.fb.group({
        name: [n, Validators.required],
      });
    }
  }
  passwordsMatchValidator(fg: FormGroup) {
    return (): ValidationErrors | null => {
      const newPass = fg.get('newPassword')?.value;
      const repeatPass = fg.get('repeatNewPassword')?.value;
      return newPass !== repeatPass ? { mismatch: true } : null;
    };
  }
  togglePassVisibility() {
    this.showPass = !this.showPass;
  }
  cancelEdit() {
    this.fgEdit = undefined;
    this.submitted = false;
  }

  save() {
    this.submitted = true;
    if (this.fgEdit?.valid) return;
  }

  // recoverPass() {
  //   this.submitted = true;
  //   if (this.recoverPassF?.invalid) return;
  //   this.usuarioS
  //     .postRecover(this.recoverPassF?.get('email')?.value)
  //     .subscribe((res) => {
  //       if (res)
  //         this.modalS.Alert(
  //           `Revisa tu correo para restablecer la contraseña. Sigue las instrucciones en tu email.`,
  //           'Perfecto!',
  //           's'
  //         );
  //     });
  // }
}
