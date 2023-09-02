import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-pelicula',
  templateUrl: './views-pelicula.component.html',
  styleUrls: ['./views-pelicula.component.css'],
})
export class ViewsPeliculaComponent implements OnInit {
  triler: boolean = false;

  ngOnInit(): void {}
  showTriler() {
    this.triler = !this.triler;
    this.triler ? window.scrollBy(0, 550) : window.scrollBy(0, -550);
  }
}
