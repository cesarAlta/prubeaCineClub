import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  rotate1:boolean=false;
  rotate2:boolean=false;
  rotate3:boolean=false;
  rotate4:boolean=false;
  offcanvasmenu:boolean=false;
  btnOffCanvas(){
    this.offcanvasmenu = ! this.offcanvasmenu;
  }

  openClose(num:number){
    


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
