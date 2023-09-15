import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private lockCounter: number = 0;
  private screenLock: NgbModalRef | undefined;

  constructor(private ngbModal: NgbModal) {}

  Alert(mensaje?: string, title: string = 'Info!', typeAlert: string = 'i') {
    const modalRef = this.ngbModal.open(ModalComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = mensaje;
    modalRef.componentInstance.textBtnTrue = 'Cerrar';
    modalRef.componentInstance.textoBotonFalse = '';
    modalRef.componentInstance.setTipo(typeAlert);
    return modalRef;
  }

  Confirm(
    massage: string,
    title: string = 'Confirmacion',
    textBtnTure: string = 'Aceptar',
    textBtnFalse: string = 'Cancelar',
    funcionTrue: any,
    funcionFalse: any,
    typeAlert: string = 'w'
  ) {
    const modalRef = this.ngbModal.open(ModalComponent);
    modalRef.componentInstance.message = massage;
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.textBtnTrue = textBtnTure;
    modalRef.componentInstance.textBtnFalse = textBtnFalse;
    modalRef.componentInstance.setTipo(typeAlert);
    modalRef.result.then((x) => (x ? funcionTrue() : funcionFalse()));
    return modalRef;
  }

  BloquearPantalla() {
    this.lockCounter++;
    if ((this, this.lockCounter === 1)) {
      this.screenLock = this.ngbModal.open(ModalComponent, {
        backdrop: 'static',
        keyboard: false,
      });
      this.screenLock.componentInstance.titulo = 'Atencion';
      this.screenLock.componentInstance.message =
        'Procesando, espere por favor';
      this.screenLock.componentInstance.textBtnFalse = '';
      this.screenLock.componentInstance.textBtnTrue = '';
      this.screenLock.componentInstance.bloquearPantalla = true;
      this.screenLock.componentInstance.setTipo('i');
    }
  }

  DesbloquearPantalla() {
    this.lockCounter--;
    if (this.lockCounter == 0) {
      this.screenLock?.close();
    }
  }
}
