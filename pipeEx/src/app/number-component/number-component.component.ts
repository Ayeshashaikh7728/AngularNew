import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-component',
  templateUrl: './number-component.component.html',
  styleUrls: ['./number-component.component.css']
})
export class NumberComponentComponent implements OnInit {
  pi: number = 3.14;
  e: number = 2.718281828459045;
  constructor() { }

  ngOnInit(): void {
  }

}
