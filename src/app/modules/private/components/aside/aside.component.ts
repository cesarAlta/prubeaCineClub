import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/modules/auth/services/usuario.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  username?: string;
  onlyDash :boolean = true;

  rotate1:boolean=false;
  rotate2:boolean=false;
  rotate3:boolean=false;
  rotate4:boolean=false;
  offcanvasmenu:boolean=false;
  accordion: boolean = true;

  constructor(
     private us: UsuarioService
    ){}

  ngOnInit(): void {
    this.us.user$.subscribe(us=> us?this.username = us._firstName : 'Ver info');
  }
  btnOffCanvas(){
    this.offcanvasmenu = ! this.offcanvasmenu;
  }
  openClose(num:number){
  }
  widthNav(){
    this.accordion= !this.accordion;
    if(this.accordion){
    }
  }
  getRotate(num:number){
    switch (num){
      case 1:
        this.rotate1 = ! this.rotate1;
        this.rotate2=false
        this.rotate3=false
        this.rotate4=false
        break;
      case 2:
        this.rotate2 = ! this.rotate2;
        this.rotate1=false
        this.rotate3=false
        this.rotate4=false
        break;
      case 3:
        this.rotate3 = ! this.rotate3;
        this.rotate2=false
        this.rotate1=false
        this.rotate4=false
        break;
      default:
        this.rotate4 = ! this.rotate4;
        this.rotate2=false
        this.rotate3=false
        this.rotate1=false
        break;
    }
  }
}
