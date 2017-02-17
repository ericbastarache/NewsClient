import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class NewsService {
  private baseUrl: string = 'https://newsapi.org/v1';
  id: string;
  //private subscription: Subscription;

  constructor(private http: Http, private activeRoute: ActivatedRoute) {
    activeRoute.queryParams.subscribe(
      (param: any) => {
        this.id = param['id'];
      }
    );
  }

  getSources () {
    let sources = this.http.get(`${this.baseUrl}/sources?lang=en`)
      .map((response: Response) => response.json());
    return sources;
  }

  getArticleList () {
    let articles = this.http.get(`${this.baseUrl}/articles?source=`+this.id+`&apiKey=a350d2b0e1624ed794b60ec15702029f`)
      .map((response: Response) => response.json());
    return articles;
  }
}
