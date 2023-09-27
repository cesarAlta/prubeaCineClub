import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { UsuarioService } from 'src/app/modules/auth/services/usuario.service';
import { HomeService } from 'src/app/modules/home/home.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  login: boolean = false;
  checkSearch=false;
  
  option!:number;
  isNavSolid = false;
  offcanvasmenu:boolean=false;
  
  constructor(
    private hs: HomeService,
    private modalService: ModalService,
    private authServ: UsuarioService,
    private route: ActivatedRoute,
    ) {}
  ngOnInit(): void {
    this.authServ.islogged$.subscribe((res) => (this.login = res));
    this.modalService.opnav$.subscribe(res=>this.option=res)

  }

  logout() {
    this.modalService.Confirm(
      'Hasta pronto!',
      'Cerrar Sesión',
      'Continuar',
      'Cancelar',
      () => this.authServ.logout(),
      () => undefined,'logo'
    );
  }
  isPartyMode: boolean = false;
  like(){
    this.isPartyMode = !this.isPartyMode;
  }
  navbarFixed = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.navbarFixed = window.scrollY > 100? true: false;
  }
  getOption(opt: number) {
    this.option = opt;
    this.hs.upDateOption(opt);
  }
  btnOffCanvas(){
    this.offcanvasmenu = ! this.offcanvasmenu;

  }

}
