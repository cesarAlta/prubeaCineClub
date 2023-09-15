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
  
  constructor(
    private hs: HomeService,
    private modalService: ModalService,
    private authServ: UsuarioService,
    private route: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    this.authServ.islogged$.subscribe((res) => (this.login = res));

  }

  logout() {
    this.modalService.Confirm(
      'Hasta pronto!',
      'Cerrar Sesión',
      'Continuar',
      'Cancelar',
      () => this.authServ.logout(),
      () => undefined,
    );
  }
  isPartyMode: boolean = false;
  like(){
    this.isPartyMode = !this.isPartyMode;
  }

  option = 1;
  isNavSolid = false;
  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isNavSolid = window.scrollY > 0;
  }
  getOption(opt: number) {
    this.option = opt;
    this.hs.upDateOption(opt);
  }
}
