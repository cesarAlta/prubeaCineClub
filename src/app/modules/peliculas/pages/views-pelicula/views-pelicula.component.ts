import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula, peliculas } from 'src/app/models/Pelicula';
import { PeliculasService } from '../../services/peliculas.service';
import { ViewportScroller } from '@angular/common';
import { IPelicula } from 'src/app/components/interface/IPelicula';

@Component({
  selector: 'app-views-pelicula',
  templateUrl: './views-pelicula.component.html',
  styleUrls: ['./views-pelicula.component.css'],
})
export class ViewsPeliculaComponent implements OnInit, AfterViewInit {
  page: number = 1;
  triler: boolean = false;
  peliSel: Pelicula | undefined;
  @Input() ver: string = '';
  @Output() emitPeli = new EventEmitter<[IPelicula, string]>();
  urlImage: string | undefined;
  pelis: Pelicula[] = peliculas.concat(peliculas);
  // nuevo
  newMovies: IPelicula[]=[];
  moviesSize: number=0;
  loading: boolean = true;
  searchName: string = '';

  constructor(
    private route: ActivatedRoute,
    private peliculaSvcs: PeliculasService,
    private scrollTo: ViewportScroller
  ) {}

  ngAfterViewInit(): void {
   this.peliculaSvcs.movies$.subscribe(res => this.newMovies = res)
   this.peliculaSvcs.movieSize$.subscribe(res => this.moviesSize = res)
  }

  ngOnInit(): void {
    // this.route.paramMap.subscribe((p) => {
    //   this.peliculaSvcs
    //     .getByName(p.get('name')!)
    //     .subscribe((res) => (this.peliSel = res));
    // });
    // this.urlImage = this.peliSel?.imagesUrlCover;
  }
  
  showTriler() {
    this.triler = !this.triler;
    // this.triler ? window.scrollBy(0, 550) : window.scrollBy(0, -550);
    this.triler
      ? this.scrollTo.scrollToAnchor('trailerMovie')
      : this.scrollTo.scrollToPosition([0, 0]);
  }

  publicar(item: Pelicula) {
    let peli = this.pelis.find((p) => p.id == item.id);
    peli ? (peli.publiclyVisible = !peli.publiclyVisible) : '';
  }
  editar(item: IPelicula) {
    this.emitPeli.emit([item, 'M']);
  }
  view(item: IPelicula) {
    this.emitPeli.emit([item, 'C']);
  }
  onImageLoad() {
    this.loading = false;
  }
  updateEstrenar(item: IPelicula) {
    this.emitPeli.emit([item, 'E']);
  }
  updatePublicar(item: IPelicula) {
    this.emitPeli.emit([item, 'P']);
  }
  clean(){
    this.searchName = '';
    this.page=1;
    this.search()
  }
  search() {
    this.peliculaSvcs.searchByName(this.searchName, this.page);
  }
}
