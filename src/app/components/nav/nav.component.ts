import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { UsuarioService } from 'src/app/modules/auth/services/usuario.service';
import { HomeService } from 'src/app/modules/home/home.service';
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
  option!: number;
  isNavSolid = false;
  offcanvasmenu: boolean = false;
  miruta: any;
  navSticky: boolean = false;
  navDashboard:boolean=false;
  navFixed:boolean = false;

  constructor(
    private hs: HomeService,
    private modalService: ModalService,
    private authServ: UsuarioService,
    private utilService: UtilsService
  ) {}
  ngOnInit(): void {
    this.authServ.islogged$.subscribe((res) => (this.login = res));
    this.hs.optview$.subscribe((res) => (this.option = res));
    this.utilService.$navConfig.subscribe((res) => this.configNav(res));

    // this.modalService.opnav$.subscribe(res=>this.option=res);
  }
  configNav(res:string){
    switch(res){
      case 'fixed':{
        this.navSticky=false;
        this.navFixed=true;
        this.navDashboard=false;
        break;
      }
      case 'navDash':{
        this.navSticky=false;
        this.navFixed=false;
        this.navDashboard=true;
        break
      }
      case 'sticky':{
        this.navSticky=true;
        this.navFixed=false;
        this.navDashboard=false;
        break
      }
    }

  }

  logout() {
    this.modalService.Confirm(
      'Hasta pronto!',
      'Cerrar Sesión',
      'Continuar',
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
    this.option = opt;
    this.hs.upDateOption(opt);
  }
  btnOffCanvas() {
    this.offcanvasmenu = !this.offcanvasmenu;
  }
}
