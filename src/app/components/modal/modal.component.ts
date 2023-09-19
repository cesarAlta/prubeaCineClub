import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  title: string = '';
  text: string = '';
  textBtnTrue: string = '';
  textBtnFalse: string = '';
  bloquearPantalla = false;
  classHeader: string = 'bg-success';
  message: string = '';
  falcon: any;
  header: boolean = false;
  iconcheck: any=false;
  iconfail: any=false;
  logout:boolean=false;
  constructor(public activeModal: NgbActiveModal) {
    this.bloquearPantalla = false;
  }

  ngOnInit(): void {}

  cerrar() {
    this.activeModal.close();
  }
  setTipo(tipo: string = 's') {
    tipo = tipo.toLowerCase();

    switch (tipo) {
      case 's':
        this.classHeader = 'bg-success';
        this.iconcheck = true;
        break;
      case 'd':
        this.classHeader = 'bg-danger';
        this.header = false;

        this.falcon = 'fa-solid fa-circle-exclamation';
        break;
      case 'i':
        this.classHeader = 'bg-info';
        this.falcon = 'fa-solid fa-circle-info';
        break;
      case 'w':
        this.classHeader = 'bg-warning';
        this.iconfail = true;
        break;
      case 'l':
        this.classHeader = '';
        this.header = false;
        break;
        case 'logo':
          this.logout=true;
        break;
      default:
        this.classHeader = 'bg-success';
        break;
    }
  }
}
