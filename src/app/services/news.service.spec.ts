/* tslint:disable:no-unused-variable */
import {} from 'jasmine';
import { TestBed, async, inject } from '@angular/core/testing';
import { NewsService } from './news.service';

describe('NewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsService]
    });
  });

  it('should ...', inject([NewsService], (service: NewsService) => {
    expect(service).toBeTruthy();
  }));
});
