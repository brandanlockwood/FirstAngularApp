import { AppPage } from './app.po';
import {browser, Config} from "protractor";

describe('practice App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  it('should navigate to about page and back to home page',()=>{
    page.navigateTo();
    console.log(browser.controlFlowIsEnabled())
     page.clickAbout();
     //browser.sleep(1000);
     page.getAboutText().getText().then(function(text){
       expect(text).toBe("This is what I'm all about. take me back.");
     })
    // browser.sleep(1000);
     page.clickHome();
    // browser.sleep(10000);

  })
  it('should display welcome message', () => {

     page.navigateTo();
    //https://github.com/angular/protractor/issues/4307 use node --inspect-brk node_modules/protractor/bin/protractor  protractor.conf.js or for thte third argument the place where protractor is installed using its bin
    //press F8 to continue
    //note only an issue with node 8 and because control flow will be deprecated
    //debugger;
     //browser.sleep(1000);


     //C:\Users\Intern\AppData\Roaming\npm\node_modules\protractor
     page.getButton().click();
     page.clickText();
     //browser.sleep(1000);
     page.clickText();
     //browser.sleep(1000)
     page.clickText();
     page.searchForBreed('labrador');
    // browser.sleep(10000);
     // page.getPictureText().getText().then(function(text){
     //   expect(text).toBe("Pictures (171)");
     // });

    //console.log(SELENIUM_PROMISE_MANAGER);
     expect(page.getPictureText()).toBe('Pictures (171)')
    // browser.sleep(1000);

  });
});
