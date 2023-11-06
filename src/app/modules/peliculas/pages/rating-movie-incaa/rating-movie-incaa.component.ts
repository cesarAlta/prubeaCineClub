import { Component, Input } from '@angular/core';
import { RatingMovieServiceService } from '../../services/rating-movie-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Calificacion } from 'src/app/models/Calificaion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rating-movie-incaa',
  templateUrl: './rating-movie-incaa.component.html',
  styleUrls: ['./rating-movie-incaa.component.css']
})
export class RatingMovieIncaaComponent {
  optSel: string = 'L';
  @Input() opSelOut: string= '';
  submitted: boolean = false;
  fgGenero!: FormGroup;
  generos!: Calificacion[];
  constructor(
    private fb: FormBuilder,
    private ratingMovieService: RatingMovieServiceService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.fgGenero = this.fb.group({
      id: null,
      nombre: ['', Validators.required],
      activo: true,
    });
    this.ratingMovieService.get().subscribe((res) => (this.generos = res));
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
