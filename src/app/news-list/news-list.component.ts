import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: []
})
export class NewsListComponent implements OnInit {
  source = [];

  constructor(private newsService: NewsService) {

  }

  ngOnInit() {
    this.newsService.getSources()
      .subscribe(
        (data: any) => {
          this.source = data.sources;
        }
      );
  }

}
