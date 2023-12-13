import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-example',
  templateUrl: './filter-example.component.html',
  styleUrls: ['./filter-example.component.css']
})
export class FilterExampleComponent implements OnInit {
  pi: number = 3.14;
  e: number = 2.718281828459045;
  josnrec={name:'eshan',age:13,address:{a1:'pune',a2:'MH'},date:'12/2/2000'}
  months=['JAN','FEB','MARCH','APRIL']
  currentDate=new Date()
  name='EShan';
  str='This is normal message'
  myDate=new Date(1980,3,12);
  toggle=true
  get format(){
    return this.toggle? 'shortDate':"fullDate"
  }
  toggleFormat(){
     this.toggle=!this.toggle 
 }
  constructor() { }

  ngOnInit(): void {
  }

}
