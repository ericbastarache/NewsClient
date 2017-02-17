import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: []
})
export class ArticleListComponent implements OnInit {
  @Input() sourceID: number;
  
  constructor() { }

  ngOnInit() {
  }

}
