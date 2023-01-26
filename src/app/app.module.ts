import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './pages/news/news.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { TopComponent } from './pages/top/top.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NewsComponent, TopComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule, NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
