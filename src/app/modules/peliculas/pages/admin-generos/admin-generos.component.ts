import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Genero } from 'src/app/models/Genero';
import { GenerosService } from '../../services/generos.service';

@Component({
  selector: 'app-admin-generos',
  templateUrl: './admin-generos.component.html',
  styleUrls: ['./admin-generos.component.css'],
})
export class AdminGenerosComponent implements OnInit {
  optSel: string = 'L';
  @Input() opSelOut: string= '';
  submitted: boolean = false;
  fgGenero!: FormGroup;
  generos!: Genero[];
  constructor(
    private fb: FormBuilder,
    private generosServices: GenerosService
  ) {}

  ngOnInit(): void {
    this.fgGenero = this.fb.group({
      id: null,
      nombre: ['', Validators.required],
      activo: true,
    });
    this.generosServices.get().subscribe((res) => (this.generos = res));
  }
  agregar() {
    this.optSel = 'A';
  }
  verGeneros() {
    this.optSel = 'L';
  }
  getPeliSel(item: any) {
    this.optSel = 'M';
    // this.peliSel= item;
  }
  cancelar(){
    this.optSel='L';
  }
  
}
