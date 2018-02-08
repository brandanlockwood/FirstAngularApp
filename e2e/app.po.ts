import {browser, by, element, protractor} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }
  clickAbout()
  {
    element(by.xpath('/html/body/app-root/ul/li[2]/a')).click();
  }
  clickText()
  {
    element(by.xpath('/html/body/app-root/app-home/div[2]/div[3]/p[6]')).click();
  }
  clickHome()
  {
    element(by.xpath('/html/body/app-root/ul/li[1]/a')).click();
  }
  getInput() {
    return element(by.xpath('/html/body/app-root/app-home/div[2]/div[1]/form/input[2]'));
  }
  getAboutText()
  {
    return element(by.xpath('/html/body/app-root/app-about/p'));
  }
  getButton()
  {
    return element(by.css('button'));
  }
  getPictureText()
  {
    return element(by.xpath('/html/body/app-root/app-home/div[1]/div[2]/p')).getText();

  }
  searchForBreed(text)
  {
    var inputForm = element(by.css('input'));
    inputForm.clear();
    inputForm.sendKeys(text);
    inputForm.sendKeys(protractor.Key.ENTER);

  }
}
