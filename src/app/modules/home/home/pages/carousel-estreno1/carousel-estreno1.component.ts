import { Component, HostListener, Input, Renderer2 } from '@angular/core';
import { Pelicula, peliculas } from 'src/app/models/Pelicula';
import { HomeService } from '../../../home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from 'src/app/modules/peliculas/services/peliculas.service';
import { IPelicula } from 'src/app/components/interface/IPelicula';

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
  currentIndex: number = 0; // Índice actual del slider

  //configuration html
  justifyFilm: string = 'left';

  //configuration pantalla

  private windowWidth = 0;
  public sizeSlider = 0;

  //peliculas
  premiereMovies!: IPelicula[]; // las peliculas

  constructor(
    private hs: HomeService,
    private rander2: Renderer2,
    private router: Router,
    private route: ActivatedRoute,
    private movieSvcs: PeliculasService
  ) {}
  anchorFilm: any;
  move: number = 0;
  ngOnInit(): void {
    this.movieSvcs.premiereMovie$.subscribe(
      (res) => (this.premiereMovies = res)
    );

    this.anchorFilm = this.premiereMovies.length * 100;

    this.getWindowWidth();

    if (this.windowWidth < 576) {
      //slider = 600%
      this.move = 95;
      this.sizeSlider = 150;
    } else if (this.windowWidth > 576 && this.windowWidth < 768) {
      this.move = 100 / 3;
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
    if (this.currentIndex < this.premiereMovies.length - 1) {
      this.currentIndex++;
    }
  }
  optestreno = 1;
  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
  
  goMovie(item: IPelicula) {
    this.movieSvcs.selectMovie(item);
    this.router.navigate(['ver', item.nombre]);
  }
  /// nuevo
  tranlatemove = 1;

  touchStartX: number = 0;
  touchEndX: any;
  minTouchDistance = 50; // Distancia mínima de desplazamiento para considerarlo un cambio de slide
  // currentIndex = 0;

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }
  onTouchMove(event: TouchEvent) {
    this.touchEndX = event.touches[0].clientX;
  }
  onTouchEnd() {
    const touchDistance = this.touchStartX - this.touchEndX;
    if (
      touchDistance > this.minTouchDistance &&
      this.currentIndex < this.premiereMovies.length - 1
    ) {
      this.nextSlide();
    } else if (touchDistance < -this.minTouchDistance && this.currentIndex > 0) {
      this.prevSlide();
    }
  }


}
