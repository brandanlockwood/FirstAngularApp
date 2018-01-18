import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'
import { HomeComponent } from './home.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {DataService} from "../data.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




  beforeEach(async() =>{
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientTestingModule, BrowserAnimationsModule],
      providers:[DataService],
      declarations: [HomeComponent]
    }).compileComponents();
  });

describe('dataService', () => {
/*  let component : HomeComponent;
  let fixture   : ComponentFixture<HomeComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;*/



 it('should create the app', (() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home= fixture.debugElement.componentInstance;
    expect(home).toBeTruthy();
  }));

it('should find Pictures',()=> {
    const  fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    const debugElement = fixture.debugElement.query(By.css('p'));
    const htmlElement = debugElement.nativeElement;
      expect(htmlElement.textContent).toBe('Pictures');
    });


});
