import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-example',
  template: `
    <ul>
    <li *ngFor="let person of people"> 
        {{ person.name }} :- {{person.age}}
        <ul>
          <li *ngFor="let friend of person.friends">
              {{friend}}
          </li>
        </ul>

        <ul>
          <li *ngFor="let add of person.addresses">
            {{add.city}} {{add.pin}}
          </li>
        </ul>
    </li>
  </ul>



  `
  ,
  styles: [
  ]
})
export class NgForExampleComponent implements OnInit {
  // friends=["Pappu","Chintu","Babli","Mannu","andu"]

  people: any[] = [
    {
      "name": "Douglas  Pace",
      "age":34,
      "friends":["Anand","Paresh","manoj","kranti"],
      "addresses":[
        {
          "city":"pune",
          "pin":411057
        },
        {
          "city":"bangalore",
          "pin":567887
        }]
    },
    {
      "name": "Mcleod  Mueller",
      "age":65,
      "friends":["Kranti","sarang","tanish"],
      "addresses":[
        {
          "city":"pune",
          "pin":411057
        },
        {
          "city":"bangalore",
          "pin":567887
        }]
    },
    {
      "name": "Day  Meyers",
      "age":46,
      "friends":["Minal","paresh","kunal"],
      "addresses":[
        {
          "city":"pune",
          "pin":411057
        },
        {
          "city":"bangalore",
          "pin":567887
        }]
    },
    {
      "name": "Aguirre  Ellis",
      "age":54,
      "friends":["parimal","tushar","kushal"],
      "addresses":[
        {
          "city":"pune",
          "pin":411057
        },
        {
          "city":"bangalore",
          "pin":567887
        }]

    },
    {
      "name": "Cook  Tyson",
      "age":65,
      "friends":["rupesh","amitabh"],
      "addresses":[
        {
          "city":"pune",
          "pin":411057
        },
        {
          "city":"bangalore",
          "pin":567887
        }]

    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
