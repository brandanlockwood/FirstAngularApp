import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import {HttpClient} from '@angular/common/http'
@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>([])
  goal = this.goals.asObservable();
  private numbers = new BehaviorSubject(0);
  number = this.numbers.asObservable();



  constructor(private http: HttpClient) { }

  changeGoal(goal){
    this.goals.next(goal);
    this.numbers.next(goal.length);

  }

  search(text) {
    let results = [];
    let stuff = [];

    this.http.get('https://dog.ceo/api/breed/'+text+'/images').subscribe(

      data =>{stuff=data["message"]

        if(stuff.toString() ==="Breed not found")
        {
        // results.push("Breed not found")
        }
        else {
        results=stuff;
        }
        this.changeGoal(results)



      }


    )

  }

}
