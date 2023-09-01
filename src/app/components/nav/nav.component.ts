import { Component, HostListener, OnInit } from '@angular/core';
import { HomeService } from 'src/app/modules/home/home.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

  constructor(private hs: HomeService ){}
  ngOnInit(): void {

    
  }
  option=1;
  isNavSolid = false;
  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isNavSolid = window.scrollY > 0;
  }
  getOption(opt:number){
    this.option=opt;
    this.hs.upDateOption(opt)

  }
}
