import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class NewsService {
  private baseUrl: string = 'https://newsapi.org/v1';

  constructor(private http: Http) { }

  getSources () {
    let sources = this.http.get(`${this.baseUrl}/sources?lang=en`)
      .map((response: Response) => response.json());
    return sources;
  }
}
