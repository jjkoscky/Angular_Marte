import { MartepagePage } from './app.po';

describe('martepage App', () => {
  let page: MartepagePage;

  beforeEach(() => {
    page = new MartepagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
