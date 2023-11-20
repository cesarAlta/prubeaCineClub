import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Auth/Usuario';
import { UsuarioService } from 'src/app/modules/auth/services/usuario.service';
import { DataService } from 'src/app/services/data.service';
import { ModalService } from 'src/app/services/modal.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  
  username?: string;
  offcanvasmenu:boolean=false;

  constructor(
    private dataSvcs: DataService, 
    private us: UsuarioService,
    private modalSvcs: ModalService
    ){}


  ngOnInit(): void {
    this.dataSvcs.updateNavConfig('navDash');
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
