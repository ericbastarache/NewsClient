import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';

import { NewsService } from './news.service';
import { NewsNavbarComponent } from './news-navbar/news-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsNavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
