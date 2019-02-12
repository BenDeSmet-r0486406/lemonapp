import { LemonappPage } from './app.po';

describe('lemonapp App', function() {
  let page: LemonappPage;

  beforeEach(() => {
    page = new LemonappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
