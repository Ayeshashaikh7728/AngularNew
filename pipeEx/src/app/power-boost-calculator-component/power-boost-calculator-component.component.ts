import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power-boost-calculator-component',
  templateUrl: './power-boost-calculator-component.component.html',
  styleUrls: ['./power-boost-calculator-component.component.css']
})
export class PowerBoostCalculatorComponentComponent implements OnInit {
  power = 5;
  factor = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
