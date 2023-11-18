import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from 'src/app/models/Pelicula';
import { PeliculasService } from '../../services/peliculas.service';
import { IGenero } from 'src/app/components/interface/IGenero';
import { IPremio } from 'src/app/components/interface/IPremio';
import { IRol } from 'src/app/components/interface/IRol';
import { IPelicula } from 'src/app/components/interface/IPelicula';
import { ModalService } from 'src/app/services/modal.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Target } from '@angular/compiler';
import { imagesTypes } from 'src/app/models/ImageType';
import { IElenco } from 'src/app/components/interface/IElenco';

@Component({
  selector: 'app-admin-peliculas',
  templateUrl: './admin-peliculas.component.html',
  styleUrls: ['./admin-peliculas.component.css'],
})
export class AdminPeliculasComponent implements OnInit {
  date: Date = new Date();
  currentYear: number = this.date.getFullYear();
  peliSel: IPelicula | undefined;
  optSel: string = 'L';
  opt = {
    L: 'listar',
    C: 'consulta',
    A: 'agregar',
    M: 'modificar',
  };
  submitted: boolean = false;
  generesList!: IGenero[];
  roleList!: IRol[];
  moviesList!: IPelicula[];
  //forms: pelicula, genero, reparto, premio
  fgMovie!: FormGroup;
  genreMovieF!: FormGroup;
  movieSel: IPelicula | undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private moviesSvcs: PeliculasService,
    private modalSvcs: ModalService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //obtenemos los generos.
    this.moviesSvcs.getGeneros().subscribe((res) => {
      this.generesList = res;
    });
    //obtenemos los roles.
    this.moviesSvcs.getRoles().subscribe((res) => {
      this.roleList = res;
    });
    //form generos.
    this.genreMovieF = this.fb.group({
      name: null,
    });

    //obtenemos las peliculas
    this.moviesSvcs.getAll();
    this.fgMovie = this.fb.group({
      idPelicula: [null],
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
      // linkPoster: [null, Validators.required],
      // linkEstreno: [null, Validators.required],
      oculta: [true, Validators.required],
      estreno: [false, Validators.required],
    });
  }

  addGenreMovies(genre?: any) {
    if (!genre) {
      if (!this.genreMovieF.get('name')?.value) return;
      else if (this.isGenreAdded(this.genreMovieF.get('name')?.value)) return;
    }

    const genreF = this.fb.group({
      nombre: genre ? genre : this.genreMovieF.get('name')?.value,
    });

    (this.fgMovie.get('generos') as FormArray).push(genreF);

    this.genreMovieF.reset();
  }
  // Funcion que retorna un booleano, si hay items repetidos en el ArrayForm de generos retorna true.
  isGenreAdded(genre: string): boolean {
    return this.genreListAdded.some((g) => g.value.nombre == genre);
  }
  // Funcion que retorna los FormControl de un FormArray
  get genreListAdded() {
    return (this.fgMovie.get('generos') as FormArray).controls;
  }

  // Método para agregar un nuevo control de elenco al FormArray
  agregarElenco(cast?: IElenco) {
    const nuevoElenco = this.fb.group({
      nombreRol: [cast ? cast.nombreRol : null, Validators.required],
      nombre: [cast ? cast.nombre : null, Validators.required],
      apellido: [cast ? cast.apellido : null, Validators.required],
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
  agregarPremio(p?: any) {
    const nuevoElenco = this.fb.group({
      nombre: [p ? p.nombre : null],
      descripcion: [p ? p.descripcion : null],
      anio: [p ? p.anio : null, [Validators.pattern(/^(19\d{2}|20\d{2})$/)]],
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

  deleteItem(index: number) {
    (this.fgMovie.get('generos') as FormArray).removeAt(index);
  }

  agregar() {
    this.optSel = 'A';
  }
  verRepo() {
    this.optSel = 'L';
    this.init();
  }
  updateItem() {
    this.getPeliSel([this.peliSel, 'M']);
  }
  //Opcion modificar
  getPeliSel(action: any) {
    if (action[1] === 'M') {
      const item: IPelicula = action[0];
      this.optSel = 'M';
      item.generos.forEach((g) => this.addGenreMovies(g));
      item.elenco.forEach((e: any) => this.agregarElenco(e));
      item.premios.forEach((p) => this.agregarPremio(p));
      this.portadaImagePreview = item.linkEstreno;
      this.carteleraImagePreview = item.linkPoster;
      this.fgMovie.patchValue(item);
      this.fgMovie.updateValueAndValidity();
    } else if (action[1] === 'C') {
      this.optSel = 'C';
      this.peliSel = action[0];
    } else {
      const itemUpdate = { nombrePelicula: action[0].nombre };
      if (action[1] === 'E') {
        const msj1 = `La pelicula ${action[0].nombre} ${
          this.peliSel?.estreno
            ? 'se eliminó correctamente de la lista de estrenos'
            : 'se agregó correctamente a la lista de estrenos '
        }`;
        this.moviesSvcs
          .updateEstreno(itemUpdate)
          .subscribe((res) => {this.modalSvcs.Alert(msj1, 'Perfecto!', 's');this.moviesSvcs.getAll();});
      } else {
        const msj1 = `La pelicula ${action[0].nombre} ${
          this.peliSel?.estreno
            ? 'se encuentra disponible para el público'
            : 'se encuentra oculta para el público '
        }`;
        this.moviesSvcs
          .updatePublicada(itemUpdate)
          .subscribe((res) => {this.modalSvcs.Alert(msj1, 'Perfecto!', 's');this.moviesSvcs.getAll();});
      }
    
    }
  }

  close() {
    this.router.navigateByUrl('dashboard');
  }
  portadaImage: any;
  portadaImagePreview: any;
  carteleraImage: any;
  carteleraImagePreview: any;

  getImage(e: any, type: string) {
    if (e.files?.length > 0) {
      const file = e.files[0];
      if (file.size > 5 * 1024 * 1024 || !this.isImageFile(file)) {
        this.modalSvcs.Alert(
          'Debe ser extensíon jpg, jpeg o png. El taño debe ser menor a 5Mb',
          'UPS!',
          'w'
        );
        return;
      }
      if (type === 'cart') {
        this.portadaImage = file;
        this.getBase64(file).then((img: any) => {
          this.portadaImagePreview = img.base;
        });
      } else {
        this.carteleraImage = file;
        this.getBase64(file).then((img: any) => {
          this.carteleraImagePreview = img.base;
        });
      }
    } else {
      type == 'cart'
        ? (this.portadaImagePreview = null)
        : (this.carteleraImagePreview = null);
    }
  }
  isImageFile(file: File) {
    return ['image/jpg', 'image/png', 'image/jpeg'].includes(file.type);
  }

  getBase64 = async ($event: any) =>
    new Promise((resolve) => {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        const img = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve({
            blob: $event,
            img,
            base: reader.result,
          });
        };
        reader.onerror = (error) => {
          resolve({
            base: null,
          });
        };
      } catch (e) {
        null;
      }
    });
  guardar() {
    this.submitted = true;
    const movie: IPelicula = { ...this.fgMovie.value };
    if (this.fgMovie.invalid) return;
    //const movie: IPelicula = { ...this.fgMovie.value };
    if (this.optSel == 'A' && this.portadaImage && this.carteleraImage) {
      this.moviesSvcs
        .post(movie, this.portadaImage, this.carteleraImage)
        .subscribe((res) => {
          this.modalSvcs.Alert(
            'La pelicula se registró correctamente',
            'Perfecto!',
            's'
          );
          this.init();
        });
    } else {
      this.moviesSvcs
        .put(
          movie,
          this.portadaImage ? this.portadaImage : null,
          this.carteleraImage ? this.carteleraImage : null
        )
        .subscribe((res) => {
          this.modalSvcs.Alert(
            'La pelicula se modificó correctamente',
            'Perfecto!',
            's'
          );
          this.verRepo();
        });
    }
  }
  init() {
    this.fgMovie.reset();
    this.cleanFormArray();
    this.genreMovieF.reset();
    this.carteleraImage = null;
    this.carteleraImagePreview = null;
    this.portadaImagePreview = null;
    this.portadaImage = null;
    this.submitted = false;
    this.peliSel = undefined;
  }

  cleanFormArray() {
    Object.keys(this.fgMovie.controls).forEach((controlName) => {
      const control = this.fgMovie.get(controlName);

      if (control instanceof FormArray) {
        while (control.length !== 0) {
          control.clear();
        }
      }
    });
  }
  updatePublicada() {
    const itemUpdate = { nombrePelicula: this.peliSel?.nombre };
    this.moviesSvcs.updatePublicada(itemUpdate);
  }
  updateEstreno() {
    const itemUpdate = { nombrePelicula: this.peliSel?.nombre };
    this.moviesSvcs.updateEstreno(itemUpdate);
  }
}
