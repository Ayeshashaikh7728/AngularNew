import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  customerRecords:any[]=[
    {
      "custName":"Rajesh",
      "custAge":45,
      "custAddress":"pune"
    },
    {
      "custName":"Kunal",
      "custAge":65,
      "custAddress":"mumbai"
    },
    {
      "custName":"Minal",
      "custAge":34,
      "custAddress":"Chennai"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
