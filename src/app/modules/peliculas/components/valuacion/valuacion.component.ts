import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-valuacion',
  templateUrl: './valuacion.component.html',
  styleUrls: ['./valuacion.component.css'],
})
export class ValuacionComponent implements OnInit {
  @Input() valoracion: number = 0;
  cantpintar: string = '';
  

  ngOnInit(): void {
    this.pintar();
  }

  pintar() {
    let pintar = this.valoracion / 5;
    this.cantpintar = `${pintar}%`;
    console.log(this.cantpintar)
  }
}
