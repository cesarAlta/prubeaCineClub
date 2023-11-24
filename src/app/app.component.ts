import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UsuarioService } from './modules/auth/services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

  // paused = false;
  // unpauseOnArrow = false;
  // pauseOnIndicator = false;
  // pauseOnHover = true;
  // pauseOnFocus = true;

  // @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  // togglePaused() {
  // 	if (this.paused) {
  // 		this.carousel.cycle();
  // 	} else {
  // 		this.carousel.pause();
  // 	}
  // 	this.paused = !this.paused;
  // }

  // onSlide(slideEvent: NgbSlideEvent) {
  // 	if (
  // 		this.unpauseOnArrow &&
  // 		slideEvent.paused &&
  // 		(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
  // 	) {
  // 		this.togglePaused();
  // 	}
  // 	if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
  // 		this.togglePaused();
  // 	}
  // }
  constructor(private authService: UsuarioService) {}

  ngOnInit() {
    this.authService.verifyUser();
    // this.moviesSvcs.getAll();
  }
}
