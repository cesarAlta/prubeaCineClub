import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ConfigPagesService {
  private URI!: string;

  constructor(private http: HttpClient) {
    this.URI = environment.api;
  }

  post(videoFile: any) {
    const formData = new FormData();
    formData.append('video', videoFile);

    return this.http.post(this.URI + 'uploadFrontPageVideo', formData);
  }
}
