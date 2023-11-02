import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Pelicula, peliculas } from 'src/app/models/Pelicula';

@Component({
  selector: 'app-carousel-simple',
  templateUrl: './carousel-simple.component.html',
  styleUrls: ['./carousel-simple.component.css'],
})
export class CarouselSimpleComponent implements OnInit{
 
  option = 3;
  @ViewChild('slider') sliderTs: ElementRef | undefined;
  @ViewChild('imgfilm') imgfilm: ElementRef | undefined;
  @ViewChild('contFilm') contFilm: ElementRef|undefined;
  films2: Pelicula[] = peliculas.concat(peliculas);
  // faAngleLeft = faAngleLeft;
  // faAngleRight = faAngleRight;
  public moveTo: number = 0;
  public move: number = 10;
  private anchorWind = 0;
  public sizeSlider = 0;
  private cantMove = 0;
  public wdm: boolean = false;

  ngOnInit(): void {}
  tranlatemove = 1;


  left() {
    
    if(this.cantMove<=-(this.films2.length - Math.floor(this.contFilm?.nativeElement.offsetWidth/ this.imgfilm?.nativeElement.offsetWidth))) return;
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
  columnItemPercentage(): number {
    return  (100 * this.imgfilm?.nativeElement.offsetWidth) /
      this.sliderTs?.nativeElement.offsetWidth;
  }

  

}