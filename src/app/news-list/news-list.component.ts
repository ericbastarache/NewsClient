import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: []
})
export class NewsListComponent implements OnInit {
  source = [];
  id: string;
  
  constructor(private newsService: NewsService, private router: Router, private activeRoute: ActivatedRoute) {

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
