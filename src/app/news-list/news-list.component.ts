import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: []
})
export class NewsListComponent implements OnInit {
  source = [];
  constructor(private newsService: NewsService) { }

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
