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
  classIcon:string='';
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
        this.classIcon = 'fa-solid fa-circle-check fs-3 text-success'
        break;
      case 'd':
        this.classHeader = 'bg-danger';
        this.header = false;
        this.classIcon = 'fa-solid fa-circle-xmark fs-3 text-danger';
        break;
      case 'i':
        this.classHeader = 'bg-info';
        this.classIcon = 'fa-solid fa-circle-info fs-3 text-primary';
        break;
      case 'w':
        this.classHeader = 'bg-warning';
        this.classIcon = 'fa-solid fa-circle-exclamation fs-3 text-warning';
        break;
      case 'l':
        this.classHeader = '';
        this.header = false;
        break;
        case 'logo':
        this.classIcon = 'fa-solid fa-door-open fs-3 text-danger';

          this.logout=true;
        break;
      default:
        this.classHeader = 'bg-success';
        break;
    }
  }
}
