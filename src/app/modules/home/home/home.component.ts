import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula, peliculas } from 'src/app/models/Pelicula';
import { HomeService } from '../home.service';
import { UtilsService } from 'src/app/services/utils.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @Input() items = [];
  @ViewChild('slider') sliderTs: ElementRef | undefined;
  @ViewChild('imgfilm') imgfilm: ElementRef | undefined;
  films2: Pelicula[] = peliculas.concat(peliculas);
  // faAngleLeft = faAngleLeft;
  // faAngleRight = faAngleRight;
  public moveTo: number = 0;
  public move: number = 10;
  private anchorWind = 0;
  public sizeSlider = 0;
  private cantMove = 0;
  public wdm: boolean = false;
  fullLoad: boolean = false;

  films: Pelicula[] = peliculas;

  constructor(
    private dataSvcs: DataService,
    private utilServices: UtilsService,
    private rander2: Renderer2,
    private router: Router,
    private route: ActivatedRoute,
    private vimeoService: HomeService
  ) {}
  ngAfterViewInit(): void {
    // this.cargando = true;
  }
  tutorialData: any;
  // urlVideo:string='https://storage.cloud.google.com/cineclub-cloud-bucket/front-page/VN20230831_004301.mp4';
  urlVideo!: string;

  ngOnInit(): void {
    this.fullLoad = false;
    this.dataSvcs.updateNavConfig('sticky');
    
    this.anchorWind = window.innerWidth;
    if (this.anchorWind < 576) {
      this.wdm = true;
      //slider = 600%
      this.sizeSlider = 150;
    } else if (this.anchorWind > 576 && this.anchorWind < 768) {
      this.wdm = true;

      //slider = 400%
      this.sizeSlider = 80;
    } else if (this.anchorWind > 768 && this.anchorWind < 998) {
      this.wdm = true;

      //slider = 300%
      this.sizeSlider = 70;
    } else {
      //slider = 200
      this.sizeSlider = 50;
    }
  }
  start(e: boolean) {
    this.fullLoad = e;
  }
  left() {
    if (this.cantMove == -3) return;
    this.cantMove -= 1;
    this.move = this.imgfilm?.nativeElement.offsetWidth;
    this.moveTo -= this.move;
  }
  rigth() {
    if (this.cantMove == 3) return;
    this.cantMove += 1;
    this.move = this.imgfilm?.nativeElement.offsetWidth;
    this.moveTo += this.move;
  }

  // eItem(e) {
  //   console.log(e);
  //   this.router.navigate(['carrito', 'agregar-item'], {
  //     queryParams: { idPro: e.id, nmp: e.name },
  //   });
  // }
}
