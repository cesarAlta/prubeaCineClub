import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Auth/Usuario';
import { UsuarioService } from 'src/app/modules/auth/services/usuario.service';
import { DataService } from 'src/app/services/data.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit{
  
  username?: string;
  onlyDash :boolean = true;

  rotate1:boolean=false;
  rotate2:boolean=false;
  rotate3:boolean=false;
  rotate4:boolean=false;
  offcanvasmenu:boolean=false;

  constructor(private dataSvcs: DataService, private us: UsuarioService,
    private route: ActivatedRoute
    ){}
  ngAfterViewInit(): void {
    this.dataSvcs.onlyDash$.subscribe(res => this.onlyDash=res)
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => {console.log(res)
    });
    console.log(this.route )
    //  this.dataSvcs.onlyDash$.subscribe(res=>this.onlyDash=res);
    this.dataSvcs.updateNavConfig('navDash');
    this.us.user$.subscribe(us=> us?this.username = us._firstName : 'Ver info');
  }
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
