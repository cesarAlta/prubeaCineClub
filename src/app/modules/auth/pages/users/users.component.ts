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
import { DataService } from 'src/app/services/data.service';
import { ModalService } from 'src/app/services/modal.service';

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
    private modalSvcs: ModalService,
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
    { id: 1, name: 'Nombre', ph: 'Nombre', field: 'nombre' },
    { id: 2, name: 'Apellido', ph: 'Apellido', field: 'apellido' },
    {
      id: 3,
      name: 'Contraseña',
      ph: 'Nueva contraseña',
      field: 'contraseña',
    },
    {
      id: 4,
      name: 'Email',
      ph: 'Email',
      field: 'email',
    },
  ];
  //Crea dinamicamente el campo a editar con un formGroup
  edit(op: number) {
    this.opSel = op;
    let opt = this.optionEdit.find((r) => r.id == op);
    this.editPlaceHolder = opt!.ph;
    this.subTitle = opt!.name;
    if (op == 3) {
      this.editPlaceHolder = 'Nueva contraseña';
      this.subTitle = 'contraseña';
      this.fgEdit = this.fb.group({
        // currentPassword: ['', Validators.required],
        newPassword: ['', Validators.required],
        repeatNewPassword: ['', Validators.required],
      });
      this.fgEdit.setValidators(this.passwordsMatchValidator(this.fgEdit));
    } else if (op == 4) {
      this.subTitle = 'email';
      this.editPlaceHolder = 'Email';
      this.fgEdit = this.fb.group({
        name: [this.user._email, [Validators.required, Validators.email]],
      });
    } else {
      const n = op == 1 ? this.user._firstName : this.user._lastNAme;
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
    if (!this.fgEdit!.valid) return;
    let updateField: any;
    if (this.opSel == 3) {
      updateField = {
        field: 'TX_CONTRASEÑA',
        updatedField: this.fgEdit?.get('newPassword')?.value,
      };
    } else if (this.opSel == 4) {
      updateField = {
        field: 'TX_MAIL',
        updatedField: this.fgEdit?.get('name')?.value,
      };
    } else {
      let field = this.opSel == 1 ? 'TX_NOMBRE' : 'TX_APELLIDO';
      updateField = {
        field: field,
        updatedField: this.fgEdit?.get('name')?.value,
      };
    }
    this.us.update(updateField).subscribe((res) => {
      this.modalSvcs.AlertConfirm(
        'Se actualizó correctamente, debes volver a inicar sesión',
        'Perfecto!',
        's',
        'Aceptar',
        ()=> { 
          this.us.logout('us/login')
         }
      );
    });
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
