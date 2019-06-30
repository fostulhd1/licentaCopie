import { AppPage } from './page-objects/app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should show the login page', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('No account yet? Create an account.');
  });
});
