import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { UsuarioService } from 'src/app/modules/auth/services/usuario.service';
import { HomeService } from 'src/app/modules/home/home.service';
import { DataService } from 'src/app/services/data.service';
import { ModalService } from 'src/app/services/modal.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  login: boolean = false;
  checkSearch = false;
  option = this.dataSvcs.optVideoView$;
  isNavSolid = false;
  offcanvasmenu: boolean = false;
  miruta: any;
  navSticky: boolean = false;
  navDashboard:boolean=false;
  navFixed:boolean = false;
  navLogin:boolean=false;

  constructor(
    private dataSvcs: DataService,
    private modalService: ModalService,
    private authServ: UsuarioService,
  ) {}
  ngOnInit(): void {
    this.authServ.islogged$.subscribe((res) => (this.login = res));
    this.dataSvcs.navConfig$.subscribe((res) => this.configNav(res));

    // this.modalService.opnav$.subscribe(res=>this.option=res);
  }
  configNav(res:string){
    switch(res){
      case 'fixed':{
        this.navSticky=false;
        this.navFixed=true;
        this.navDashboard=false;
        this.navLogin= true

        break;
      }
      case 'navDash':{
        this.navSticky=false;
        this.navFixed=false;
        this.navDashboard=true;
        this.navLogin= true

        break
      }
      case 'sticky':{
        this.navSticky=true;
        this.navFixed=false;
        this.navDashboard=false;
        this.navLogin= true

        break
      }
      case 'navLogin':{
        this.navSticky=false;
        this.navFixed=false;
        this.navDashboard=false;
        this.navLogin= true
        break
      }
    }

  }

  logout() {
    this.modalService.Confirm(
      'Hasta pronto!',
      'Cerrar Sesión',
      'Salir',
      'Cancelar',
      () => this.authServ.logout(),
      () => undefined,
      'logout',
      'sm'
    );
  }
  isPartyMode: boolean = false;
  like() {
    this.isPartyMode = !this.isPartyMode;
  }
  navbarFixed = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.navbarFixed = window.scrollY > 50 && this.navSticky ? true : false;
  }
  getOption(opt: number) {
    this.dataSvcs.upDateOption(opt);
  }
  btnOffCanvas() {
    this.offcanvasmenu = !this.offcanvasmenu;
  }
}
