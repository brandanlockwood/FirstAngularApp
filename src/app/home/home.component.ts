import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DataService } from  '../data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),

      query(':enter',stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))]),{optional:true}),

        query(':leave',stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
          ]))]),{optional:true})
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string='search breed';
  goalText: string= 'labrador';
  goals = [];
  successClass = "text-success"
  hasError =true;
  isSpecial = true;
  messageClass= {
    "text-special": this.isSpecial,
    "text-danger": this.hasError,
    "text-success": !this.hasError
  }
  count=0;
  color="green";
  show=false;
  showCount=1;



  constructor(private _data: DataService) { }

  ngOnInit() {

    this._data.goal.subscribe(res => this.goals = res);
    this._data.number.subscribe(res => this.itemCount = res);
     this.itemCount= this.goals.length;
    this._data.changeGoal(this.goals);


  }
  addItem(event){
    console.log(event);
    this._data.search(this.goalText);
    //this.goals.push(this.goalText)
    this.goalText = '';
    this.itemCount = this.goals.length;
    //this._data.changeGoal(this.goals)

  }

  removeItem(i){
    this.goals.splice(i,1);
    this._data.changeGoal(this.goals)
     this.itemCount = this.goals.length;
  }
  changeOnClick()
  {
    this.count++;
    if(this.count % 2 == 0)
    {
       this.hasError =true;
       this.isSpecial = true;
       this.color='green'
    }
    else {
      this.hasError = false;
      this.isSpecial = false;
      this.color="blue"
    }
  }
  showHidden(event)
  {
    console.log(event);
    console.log(this.show);
    this.show=true;
        this.showCount++;
    if(this.showCount % 2 == 0)
    {
    this.show=true;
    }
    else {
    this.show=false;
    }
  }

}
