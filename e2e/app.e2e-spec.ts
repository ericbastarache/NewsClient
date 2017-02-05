import { NewsClientPage } from './app.po';

describe('news-client App', function() {
  let page: NewsClientPage;

  beforeEach(() => {
    page = new NewsClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
