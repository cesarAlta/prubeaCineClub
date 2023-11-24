import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Input() sm: boolean | undefined;

  searchMovie: any;
  showSearch: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  search() {
    this.searchMovie
    ? this.router.navigate(['peliculas/', this.searchMovie])
    : this.router.navigate(['peliculas/genero/todas']);
    this.searchMovie='';
  }
}
