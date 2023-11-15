import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/models/Pelicula';
import { PeliculasService } from '../../services/peliculas.service';
import { IGenero } from 'src/app/components/interface/IGenero';
import { IPremio } from 'src/app/components/interface/IPremio';
import { IRol } from 'src/app/components/interface/IRol';
import { IPelicula } from 'src/app/components/interface/IPelicula';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-admin-peliculas',
  templateUrl: './admin-peliculas.component.html',
  styleUrls: ['./admin-peliculas.component.css'],
})
export class AdminPeliculasComponent implements OnInit {
  date: Date = new Date();
  currentYear: number = this.date.getFullYear();
  peliSel: Pelicula | undefined;
  optSel: string = 'L';
  opt = {
    L: 'listar',
    C: 'consulta',
    A: 'agregar',
    M: 'modificar',
  };
  fgMovie!: FormGroup;
  submitted: boolean = false;
  generesList!: IGenero[];
  roleList!: IRol[];

  genreMovieF!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private moviesSvcs: PeliculasService,
    private modalSvcs:ModalService
  ) {}

  ngOnInit(): void {
    this.moviesSvcs.getGeneros().subscribe((res) => {
      this.generesList = res;
    });
    this.moviesSvcs.getRoles().subscribe((res) => {
      this.roleList = res;
      console.log(res);
    });

    this.genreMovieF = this.fb.group({
      name: null,
    });

    this.fgMovie = this.fb.group({
      nombre: ['', Validators.required],
      anioEstreno: [
        null,
        [Validators.required, Validators.pattern(/^(19\d{2}|20\d{2})$/)],
      ],
      sinopsis: ['', Validators.required],
      duracion: [null, [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      generos: this.fb.array([]),
      pais: ['Argentina', Validators.required],
      idioma: ['Español', Validators.required],
      premios: this.fb.array([]),
      elenco: this.fb.array([]),

      soporte: ['HD', Validators.required],
      calificacion: ['', Validators.required],

      linkTrailer: ['', Validators.required],
      linkPelicula: ['', Validators.required],
      linkPoster: ['', Validators.required],
      linkEstreno: ['', Validators.required],
      oculta: [true, Validators.required],
      estreno: [false, Validators.required],
    });
  }

  addGenreMovie() {
    if (!this.genreMovieF.get('name')?.value) return;
    else if (this.isGenreAdded(this.genreMovieF.get('name')?.value)) return;
    const arreglo = this.fgMovie.get('generos') as FormArray;
    const newItem = this.fb.group({
      nombre: this.genreMovieF.get('name')?.value,
    });
    arreglo.push(newItem);
    this.genreMovieF.reset();
  }

  isGenreAdded(genre: string): boolean {
    return this.genreListAdded.some((g) => g.value.nombre == genre);
  }

  get genreListAdded() {
    return (this.fgMovie.get('generos') as FormArray).controls;
  }

  // Método para agregar un nuevo control de elenco al FormArray
  agregarElenco() {
    const nuevoElenco = this.fb.group({
      rol: [null, Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
    });

    // Agregar el nuevo control de elenco al FormArray
    (this.fgMovie.get('elenco') as FormArray).push(nuevoElenco);
  }

  // Método para eliminar un control de elenco del FormArray
  eliminarElenco(index: number) {
    (this.fgMovie.get('elenco') as FormArray).removeAt(index);
  }

  // Método para obtener el FormArray de elenco
  get castMemberAdded() {
    return (this.fgMovie.get('elenco') as FormArray).controls;
  }

  // Método para agregar un nuevo control de elenco al FormArray
  agregarPremio() {
    const nuevoElenco = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      anio: [
        '',
        [Validators.required, Validators.pattern(/^(19\d{2}|20\d{2})$/)],
      ],
    });

    // Agregar el nuevo control de elenco al FormArray
    (this.fgMovie.get('premios') as FormArray).push(nuevoElenco);
  }

  // Método para eliminar un control de elenco del FormArray
  eliminarPremio(index: number) {
    (this.fgMovie.get('premios') as FormArray).removeAt(index);
  }

  // Método para obtener el FormArray de elenco
  get premioFormArray() {
    return (this.fgMovie.get('premios') as FormArray).controls;
  }

  ver(e: any) {
    console.log(e);
  }

  deleteItem(index: number) {
    (this.fgMovie.get('generos') as FormArray).removeAt(index);
  }

  agregar() {
    this.optSel = 'A';
  }
  verRepo() {
    this.optSel = 'L';
  }
  getPeliSel(item: Pelicula) {
    this.optSel = 'M';
    this.peliSel = item;
  }
  close() {
    this.router.navigateByUrl('dashboard');
  }

  guardar() {
    this.submitted = true;
    console.log({ ...this.fgMovie.value });
    if (this.fgMovie.invalid) return;
    const movie: IPelicula = { ...this.fgMovie.value };
    this.moviesSvcs.put(movie).subscribe(res => this.modalSvcs.Alert('La pelicula se registró correctamente', 'Perfecto!','s'))

  }
}
