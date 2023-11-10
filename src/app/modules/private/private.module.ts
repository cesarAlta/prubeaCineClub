import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { ConfigPageComponent } from './pages/config-page/config-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from './components/cards/cards.component';


@NgModule({
  declarations: [
    ConfigPageComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ReactiveFormsModule
  ]
})
export class PrivateModule { }
