import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';

import { NewsService } from './services/news.service';
import { NewsNavbarComponent } from './news-navbar/news-navbar.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleItemComponent } from './article-item/article-item.component';

const appRoutes: Routes = [
  // { path: 'article-list', component: ArticleListComponent },
  { path: 'article-list/:id', component: ArticleListComponent },
  { path: 'article-item', component: ArticleItemComponent },
  { path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsNavbarComponent,
    ArticleListComponent,
    ArticleItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
