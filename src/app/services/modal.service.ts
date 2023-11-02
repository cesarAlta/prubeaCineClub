import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../components/modal/modal.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  // para el nav
  
	// private opnav = new BehaviorSubject<number>(1);
	// opnav$ = this.opnav.asObservable();
  // 

  private lockCounter: number = 0;
  private screenLock: NgbModalRef | undefined;

  constructor(private ngbModal: NgbModal) {}
  lockedSreen():boolean{
    return this.lockCounter ===1?true: false
  }

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
    typeAlert: string = 'w',
    size?:string
  ) {
    const modalRef = this.ngbModal.open(ModalComponent, { size: size });
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
      this.screenLock = this.ngbModal.open(ModalComponent,  {
        backdrop: 'static',
        keyboard: false
        // fullscreen: true
      });
      this.screenLock.componentInstance.title = 'Aguarde un momento por favor';
      this.screenLock.componentInstance.message =
        'Procesando...';
      this.screenLock.componentInstance.textBtnFalse = '';
      this.screenLock.componentInstance.textBtnTrue = '';
      this.screenLock.componentInstance.lockScreen = true;
      this.screenLock.componentInstance.setTipo('p');
    }
  }

  DesbloquearPantalla() {
    this.lockCounter--;
    if (this.lockCounter == 0) {
      this.screenLock?.close();
    }
  }
}
