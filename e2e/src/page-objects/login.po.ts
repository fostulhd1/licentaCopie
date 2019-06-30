import { browser, by, element, ExpectedConditions } from 'protractor';
import { PageObjectBase } from './base.po';

export class LoginPage extends PageObjectBase {
  constructor() {
    super('app-login', '/login');
  }

  waitForError() {
    browser.wait(
        ExpectedConditions.presenceOf(element(by.css('.error'))),
        3000
    );
  }

  getErrorMessage() {
    return element(by.css('.error')).getText();
  }

  enterEMail(email: string) {
    this.enterInputText('#email', email);
  }

  enterPassword(password: string) {
    this.enterInputText('#password', password);
  }

  clickSignIn() {
    this.clickButton('.submit-btn');
  }

  clickGotoRegister() {
    this.clickButton('.go-to-register');
  }
}
