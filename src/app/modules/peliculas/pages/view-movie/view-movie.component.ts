import { ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IPelicula } from 'src/app/components/interface/IPelicula';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent {
  
  triler:boolean=false;
  @Input() peliSel!: IPelicula;

  constructor(private scrollTo: ViewportScroller){

  }

  showTriler() {
    this.triler = !this.triler;
    // this.triler ? window.scrollBy(0, 550) : window.scrollBy(0, -550);
    this.triler
      ? this.scrollTo.scrollToAnchor('trailerMovie')
      : this.scrollTo.scrollToPosition([0, 0]);
  }


}
