import { ServerlessProjectPage } from './app.po';

describe('serverless-project App', function() {
  let page: ServerlessProjectPage;

  beforeEach(() => {
    page = new ServerlessProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
