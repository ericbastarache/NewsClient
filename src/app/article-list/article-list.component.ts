import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: []
})
export class ArticleListComponent implements OnInit, OnDestroy {
  list = [];
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getArticleList()
      .subscribe(
        (data: any) => {
          this.list = data.articles;
        }
      );
  }

  ngOnDestroy () {
    
  }

}
