import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NewsService {
  private baseUrl: string = 'https://newsapi.org/v1';

  constructor(private http: Http) { }

  /*getAll() {
    let allNews = this.http
      .get(`${this.baseUrl}/sources?lang=en`)
      .map('nothing');
    return allNews;
  }*/
}
