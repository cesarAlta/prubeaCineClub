import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Rol } from 'src/app/models/Rol';
import { CastMovieService } from '../../services/cast-movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cast-movie',
  templateUrl: './cast-movie.component.html',
  styleUrls: ['./cast-movie.component.css']
})
export class CastMovieComponent {

  optSel: string = 'L';
  @Input() opSelOut: string= '';
  submitted: boolean = false;
  fgGenero!: FormGroup;
  generos!: Rol[];
  constructor(
    private fb: FormBuilder,
    private castMovieService: CastMovieService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.fgGenero = this.fb.group({
      id: null,
      nombre: ['', Validators.required],
      activo: true,
    });
    this.castMovieService.get().subscribe((res) => (this.generos = res));
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
  close(){
    this.router.navigateByUrl('dashboard')
  }

  
}
