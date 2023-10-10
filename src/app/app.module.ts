import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HomeModule } from './modules/home/home.module';
import { NavComponent } from './components/nav/nav.component';
import { ModalComponent } from './components/modal/modal.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './modules/private/pages/dashboard/dashboard.component';
import { AuthModule } from './modules/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ModalComponent,
    FooterComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    NgbModalModule,
    AuthModule,
    HttpClientModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' },
  // { provide: LocationStrategy, useClass: HashLocationStrategy }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
