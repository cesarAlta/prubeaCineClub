import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/modules/auth/services/usuario.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  username?: string;
  accordion: boolean = true;

  constructor(
     private us: UsuarioService,
     private modalSvcs: ModalService
    ){}

  ngOnInit(): void {
    this.us.user$.subscribe(us=> us?this.username = us._firstName : 'Ver info');
  }
 
  logout() {
    this.modalSvcs.Confirm(
      'Hasta pronto!',
      'Cerrar Sesión',
      'Salir',
      'Cancelar',
      () => this.us.logout(),
      () => undefined,
      'logout',
      'sm'
    );
  }

}
