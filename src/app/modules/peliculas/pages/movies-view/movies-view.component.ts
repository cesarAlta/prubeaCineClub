import { Component, Input, OnInit } from '@angular/core';
import { IPelicula } from 'src/app/components/interface/IPelicula';

@Component({
  selector: 'app-movies-view',
  templateUrl: './movies-view.component.html',
  styleUrls: ['./movies-view.component.css']
})
export class MoviesViewComponent implements OnInit{

  @Input() moviesList!: IPelicula[];
  
  page:number=1;

  loading:boolean=true;

  constructor(){}
   ngOnInit(): void {
     
   }
   onImageLoad(){
    this.loading=false;

  }

}
