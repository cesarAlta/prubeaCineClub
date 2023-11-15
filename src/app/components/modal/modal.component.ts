import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  title: string = '';
  textBtnTrue?: string;
  classBtnTrue: string='btn-success';
  textBtnFalse: string = '';
  classBtnFalse: string='btn-danger';
  lockScreen = false;
  message: string = '';
  classIcon: string = '';
  border?: string;
  processing: boolean = false;
  color: string = 'success';
  footer:boolean = false;

  constructor(public activeModal: NgbActiveModal) {
    this.lockScreen = false;
  }

  cerrar() {
    this.activeModal.close();
  }
  setTipo(tipo: string = 's') {
    tipo = tipo.toLowerCase();

    switch (tipo) {
      case 's':
        this.classIcon = 'fa-solid fa-circle-check fs-2 text-success';
        this.border = 'border-success';
        break;
      case 'd':
        this.classIcon = 'fa-solid fa-circle-xmark fs-2 text-danger';
        this.border = 'border-danger';
        this.classBtnTrue = 'btn-danger';
        break;
      case 'i':
        this.classIcon = 'fa-solid fa-circle-info fs-2 text-primary';
        this.border = 'border-info';
        this.classBtnTrue = 'btn-info';

        break;
      case 'w':
        this.classIcon = 'fa-solid fa-circle-exclamation fs-2 text-warning';
        this.border = 'border-warning';
        this.classBtnFalse = 'btn-warning'
        this.footer=true;
        break;
      case 'p':
        this.classIcon = 'fa-solid fa-gear fa-spin fs-2';
        this.border = 'border-light';
        this.processing = true;
        break;
      case 'logout':
        this.classIcon = 'fa-solid fa-door-open fs-2 text-danger';
        this.border = 'border-danger';
        this.classBtnTrue='btn-danger'
        this.classBtnFalse= 'btn-secondary';
        this.footer= true;

        break;
      default:
        break;
    }
  }
}
