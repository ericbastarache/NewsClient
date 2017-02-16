import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: []
})
export class NewsListComponent implements OnInit {
  source = [];
  constructor(private newsService: NewsService) { }

  logName () {
    this.newsService.getName()
      .subscribe(
        (data: any) => {
          console.log(data.sources.name);
        }
      );
  }

  ngOnInit() {
    this.newsService.getSources()
      .subscribe(
        (data: any) => {
          this.source = data.sources;
          console.log(this.source);
        }
      );
  }

}
