import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {async} from "@angular/core/testing";



describe('DataService', () => {

  beforeEach(async()=>{
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[DataService]
    })
  });

  it("should be created ",inject([DataService], (service: DataService)=>
  {
    expect(service).toBeTruthy();
  }));

});
