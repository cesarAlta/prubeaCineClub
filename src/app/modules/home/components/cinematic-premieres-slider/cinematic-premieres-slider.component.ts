import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IPelicula } from 'src/app/components/interface/IPelicula';
import { PeliculasService } from 'src/app/modules/peliculas/services/peliculas.service';

@Component({
  selector: 'app-cinematic-premieres-slider',
  templateUrl: './cinematic-premieres-slider.component.html',
  styleUrls: ['./cinematic-premieres-slider.component.css']
})
export class CinematicPremieresSliderComponent {
  option = 3;
  @ViewChild('slider') sliderTs: ElementRef | undefined;
  @ViewChild('imgfilm') imgfilm: ElementRef | undefined;
  @ViewChild('contFilm') contFilm: ElementRef | undefined;
  films2!: IPelicula[];
  // faAngleLeft = faAngleLeft;
  // faAngleRight = faAngleRight;
  public moveTo: number = 0;
  public move: number = 10;
  private anchorWind = 0;
  public sizeSlider = 0;
  private cantMove = 0;
  public wdm: boolean = false;

  constructor(private route: Router, private movieSvcs: PeliculasService) {}

  ngOnInit(): void {
    this.movieSvcs.premiereMovie$.subscribe((res) => (this.films2 = res));
  }
  tranlatemove = 1;

  touchStartX: number = 0;
  touchEndX: any;
  minTouchDistance = 50; // Distancia mínima de desplazamiento para considerarlo un cambio de slide
  currentIndex = 0;

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
      this.cantMove < this.films2.length - 1
    ) {
      this.left();
    } else if (touchDistance < -this.minTouchDistance && this.cantMove < 0) {
      this.rigth();
    }
  }

  left() {
    if (
      this.cantMove <=
      -(
        this.films2.length -
        Math.floor(
          this.contFilm?.nativeElement.offsetWidth /
            this.imgfilm?.nativeElement.offsetWidth
        )
      )
    )
      return;
    this.cantMove -= 1;
    this.move = this.imgfilm?.nativeElement.offsetWidth;
    this.moveTo -= this.move;
  }
  rigth() {
    if (this.cantMove == 0) return;
    this.cantMove += 1;
    this.move = this.imgfilm?.nativeElement.offsetWidth;
    this.moveTo += this.move;
  }

  goMovie(item: IPelicula) {
    this.movieSvcs.selectMovie(item);
    this.route.navigate(['ver', item.nombre]);
  }
}
