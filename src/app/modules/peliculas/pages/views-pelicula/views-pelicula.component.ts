import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula, peliculas } from 'src/app/models/Pelicula';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-views-pelicula',
  templateUrl: './views-pelicula.component.html',
  styleUrls: ['./views-pelicula.component.css'],
})
export class ViewsPeliculaComponent implements OnInit {
  triler: boolean = false; 
  peliSel: Pelicula | undefined;
  @Input()ver: string= '';
  @Output() emitPeli = new EventEmitter<Pelicula>()

  pelis: Pelicula[] = peliculas.concat(peliculas);

  constructor(
    private route: ActivatedRoute, private peliculaService: PeliculasService
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(p=>{
      this.peliculaService.getByName(p.get('name')!).subscribe(res=>
        this.peliSel=res)
    })
  }
  showTriler() {
    this.triler = !this.triler;
    this.triler ? window.scrollBy(0, 550) : window.scrollBy(0, -550);
  }

  publicar(item:Pelicula){
    let peli = this.pelis.find(p=>p.id ==item.id);
    peli? peli.publiclyVisible=!peli.publiclyVisible:''

  }
  editar(item:Pelicula){
    this.emitPeli.emit(item);
    

  }
}
