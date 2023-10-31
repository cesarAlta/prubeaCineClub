import {
  Component,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Pelicula, peliculas } from 'src/app/models/Pelicula';
import { HomeService } from '../../../home.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carousel-estreno1',
  templateUrl: './carousel-estreno1.component.html',
  styleUrls: ['./carousel-estreno1.component.css'],
})
export class CarouselEstreno1Component {
  option = 1;
  showTirilla = false;
  showFondoDark = false;
  show1film = false;
  show2film = false;
  showcentrar = false;
  showEspaciarDOble = false;
  showEspaciarIz = false;
  showOcultarOp = true;
  itemoculto = false;
  mostrarbtndesplzamiento = true;

  @Input() items = [];
  @Input() title: string = 'Cargando...';

  //configuration slider
  scrollSlider: number = 0;
  sliderItems: Pelicula[] = []; // las peliculas
  currentIndex: number = 0; // Índice actual del slider

  //configuration html
  justifyFilm: string = 'left';

  //configuration pantalla

  private windowWidth = 0;
  public sizeSlider = 0;

  //peliculas
  films: Pelicula[] = peliculas.filter((item) => item.isPremiere);

  constructor(
    private hs: HomeService,
    private rander2: Renderer2,
    private router: Router,
    private route: ActivatedRoute
  ) {}
anchorFilm:any;
move:number=0;
  ngOnInit(): void {
    this.anchorFilm = this.films.length * 100;


    this.getWindowWidth();
    // carga de las peliculas
    this.sliderItems = peliculas;

    if (this.windowWidth < 576) {
      //slider = 600%
      this.move=95;
      this.sizeSlider = 150;
    } else if (this.windowWidth > 576 && this.windowWidth < 768) {
      this.move= 100/3;
      //slider = 400%
      this.sizeSlider = 80;
    } else if (this.windowWidth > 768 && this.windowWidth < 998) {
      //slider = 300%
      this.sizeSlider = 70;
    } else {
      //slider = 200
      this.sizeSlider = 50;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.getWindowWidth();
  }
  private getWindowWidth(): void {
    this.windowWidth = window.innerWidth;
  }
  nextSlide() {
    if (this.currentIndex < this.sliderItems.length -2) {
      this.currentIndex++;
    }
  }
  optestreno = 1;
  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }


}
