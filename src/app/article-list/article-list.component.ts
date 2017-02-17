import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: []
})
export class ArticleListComponent implements OnInit {
  list = [];
  private sub;
  constructor(private newsService: NewsService, private route: ActivatedRoute, private r: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.newsService.getArticleList()
      .subscribe(
        (data: any) => {
          this.list = data.articles;
        }
      )
    });

  }
}
