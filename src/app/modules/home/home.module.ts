import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CarouselEstreno1Component } from './home/pages/carousel-estreno1/carousel-estreno1.component';
import { Carousel3dComponent } from './home/pages/carousel3d/carousel3d.component';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    CarouselEstreno1Component,
    Carousel3dComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbCarouselModule,
    FormsModule
  ]
})
export class HomeModule { }
