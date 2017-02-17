import { Component, OnInit, OnChanges } from '@angular/core';
import { NewsService } from '../services/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: []
})
export class ArticleListComponent implements OnInit, OnChanges {
  list = [];
  private sub: any;
  private id;
  constructor(private newsService: NewsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.newsService.getArticleList()
      .subscribe(
        (data: any) => {
          this.list = data.articles;
        }
      );
  }

  ngOnChanges () {
    this.sub.unsubscribe();
  }

}
