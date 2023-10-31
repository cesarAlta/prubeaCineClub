import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { ConfigPageComponent } from './pages/config-page/config-page.component';


@NgModule({
  declarations: [
    ConfigPageComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
