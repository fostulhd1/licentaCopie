import { browser, by, element } from 'protractor';
import {PageObjectBase} from './base.po';

export class AppPage extends PageObjectBase {
  constructor() {
    super('app', '/');
  }

  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.deepCss('app-root ion-content')).getText();
  }
}
