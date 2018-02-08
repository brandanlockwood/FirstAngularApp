import { fakeAsync,async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'
import { HomeComponent } from './home.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {DataService} from "../data.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





 describe('Home Component',async()=>
{



   beforeEach(() =>{
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientTestingModule, BrowserAnimationsModule],
      providers:[DataService],
      declarations: [HomeComponent]
    })
  });

  it('should', (() => {


  //spyOn(component, 'about');
   //let fixture = TestBed.createComponent(HomeComponent);
   //fixture.detectChanges();
   //let component = fixture.componentInstance;
  // spyOn(component,'addItem');
   //  console.log(fixture);
 //  let text   = fixture.debugElement.nativeElement.querySelector('button');
 //    let button = fixture.debugElement.nativeElement.querySelectorAll('input')[1];
 //  text.click();
 // console.log(text);
 //  console.log(component.goalText);
 //  console.log(component.show);
 //  fixture.detectChanges();
 //  text.dispatchEvent(new Event('input'));
 //    button.click();
 //    text.click();
 //   fixture.whenStable().then(() => {
 //
 //
 //    expect(component.addItem).toHaveBeenCalled();
 //
 //  //button.click();
 //   })
  }));

  // it('Click on the show hidden button', (async() => {
  //   let fixture = TestBed.createComponent(HomeComponent);
  //   let showHidden  = fixture.debugElement.nativeElement.querySelector('button');
  //   let component = fixture.componentInstance;
  //   spyOn(component,'showHidden');
  //   showHidden.click();
  //   fixture.detectChanges()
  //   expect(component.showHidden).toHaveBeenCalled();
  //   }));
   it('Click on the search breed', (async() => {
    let fixture = TestBed.createComponent(HomeComponent);
    let button = fixture.debugElement.nativeElement.querySelectorAll('input')[1];
    console.log(button)
    let component = fixture.componentInstance;
    spyOn(component,'addItem');
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
     expect(component.addItem).toHaveBeenCalled();
  })


    }));
//    it('should create the app', (() => {
//    // fixture = TestBed.createComponent(HomeComponent);
//      console.log(fixture)
//     const home= fixture.debugElement.componentInstance;
//     expect(home).toBeTruthy();
//   }));
//
// it('should find Pictures',()=> {
//    // fixture = TestBed.createComponent(HomeComponent);
//     const debugElement = fixture.debugElement.query(By.css('p'));
//     const htmlElement = debugElement.nativeElement;
//       expect(htmlElement.textContent).toBe('Search for dog pictures');
//     });

});



