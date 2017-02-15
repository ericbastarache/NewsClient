import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class NewsService {
  private baseUrl: string = 'https://newsapi.org/';
  
  constructor(private http: Http) { }


}
