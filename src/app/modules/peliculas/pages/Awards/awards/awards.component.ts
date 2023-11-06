import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Awards } from 'src/app/models/Awards';
import { AwardsMovieService } from '../../../services/awards-movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent {
  optSel: string = 'L';
  @Input() opSelOut: string= '';
  submitted: boolean = false;
  fgGenero!: FormGroup;
  generos!: Awards[];
  constructor(
    private fb: FormBuilder,
    private awardsMovieService: AwardsMovieService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.fgGenero = this.fb.group({
      id: null,
      nombre: ['', Validators.required],
      activo: true,
    });
    this.awardsMovieService.get().subscribe((res) => (this.generos = res));
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
