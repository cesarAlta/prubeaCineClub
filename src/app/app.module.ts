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
import { AuthModule } from './modules/auth/auth.module';
import { MyInterceptor } from './interceptor/my.interceptor';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { BgLoadingComponent } from './components/bg-loading/bg-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ModalComponent,
    FooterComponent,
    SearchComponent,
    BgLoadingComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    NgbModalModule,
    AuthModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' },
  { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

  // { provide: LocationStrategy, useClass: HashLocationStrategy }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
