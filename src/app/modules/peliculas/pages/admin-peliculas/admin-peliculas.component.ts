import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/models/Pelicula';

@Component({
  selector: 'app-admin-peliculas',
  templateUrl: './admin-peliculas.component.html',
  styleUrls: ['./admin-peliculas.component.css']
})
export class AdminPeliculasComponent implements OnInit {
  peliSel:Pelicula | undefined ;
  optSel:string='L';
  opt ={
    L: 'listar',
    C: 'consulta',
    A: 'agregar',
    M: 'modificar',

  }
  constructor(private router: Router){}
  
  ngOnInit(): void {
  }
  agregar(){
    this.optSel='A';
  }
  verRepo(){
    this.optSel='L';

  }
  getPeliSel(item:Pelicula){
    this.optSel='M'
    this.peliSel= item;
    
  }
  close(){
    this.router.navigateByUrl('dashboard')
  }


}
