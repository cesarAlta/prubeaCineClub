import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-video-home',
  templateUrl: './video-home.component.html',
  styleUrls: ['./video-home.component.css']
})
export class VideoHomeComponent implements OnInit {
   op = this.dataSvcs.optVideoView$;

   @Output() loaded =new EventEmitter<boolean>();

  urlVideo!:string;

  constructor( 
    private dataSvcs: DataService
  ){}

  ngOnInit(): void {

    this.dataSvcs.getVideo().subscribe(
      res => this.urlVideo = res
    )
  }
  fullLoad(e:Event){
    this.loaded.emit(true);  
  }

}
