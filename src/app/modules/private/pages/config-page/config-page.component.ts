import { Component, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalService } from 'src/app/services/modal.service';
import { ConfigPagesService } from '../../services/config-pages.service';

@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.css']
})
export class ConfigPageComponent {
  videoPreview: any;
  videoFile: any;


  constructor(private ms: ModalService, private sanitizer: DomSanitizer,
    private configPagServices: ConfigPagesService
    ){}
 

  getVideo(videoFileEvent: any){
    if(videoFileEvent.target!.files?.length >0){
      if(videoFileEvent.target.files[0].type != 'video/mp4'){
        this.ms.Alert('Debe ser extensíon .mp4', 'Error de formato de video', 'w');
        return;
      }
      this.videoFile = videoFileEvent.target.files[0];
      const videoUrl = URL.createObjectURL(this.videoFile);
      this.videoPreview = this.sanitizer.bypassSecurityTrustUrl(videoUrl);
    }
  }

  saveVideo(){
    console.log(this.videoFile)
    if(this.videoFile){
      this.configPagServices.post(this.videoFile).subscribe(res=> console.log(res))
    }

  }
}
