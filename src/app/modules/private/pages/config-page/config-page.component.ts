import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalService } from 'src/app/services/modal.service';
import { ConfigPagesService } from '../../services/config-pages.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.css'],
})
export class ConfigPageComponent implements OnInit {
  videoPreview: any;
  videoFile: any;
  submitted: boolean = false;

  fgFileVideo!: FormGroup;

  constructor(
    private ms: ModalService,
    private sanitizer: DomSanitizer,
    private configPagServices: ConfigPagesService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.fgFileVideo = this.fb.group({
      file: ['', Validators.required],
    });
  }
  getVideo(videoFileEvent: any) {
    if (videoFileEvent.target!.files?.length > 0) {
      if (videoFileEvent.target.files[0].type != 'video/mp4') {
        this.ms.Alert(
          'Debe ser extensíon .mp4',
          'Error de formato de video',
          'w'
        );
        return;
      } else if (videoFileEvent.target.files[0].size > 100 * 1024 * 1024) {
        this.ms.Alert(
          'Debe ser menor a 100 mb',
          'Error de tamaño de video',
          'w'
        );
        return;
      }
      this.videoFile = videoFileEvent.target.files[0];
      const videoUrl = URL.createObjectURL(this.videoFile);
      this.videoPreview = this.sanitizer.bypassSecurityTrustUrl(videoUrl);
    } else {
      this.cancel();
    }
  }

  saveVideo() {
    this.submitted = true;
    if (this.videoFile) {
      this.configPagServices.post(this.videoFile).subscribe((res) => {
        if (res)
          this.ms.Alert(
            'Se actualizó correctamente el video de portada',
            'Perfecto!',
            's'
          );
      });
    }
  }
  cancel() {
    this.submitted = false;
    this.videoFile = null;
    this.videoPreview = null;
    this.fgFileVideo.reset();
  }
}
