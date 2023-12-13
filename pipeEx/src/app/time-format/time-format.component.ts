import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-format',
  templateUrl: './time-format.component.html',
  styleUrls: ['./time-format.component.css']
})
export class TimeFormatComponent implements OnInit {
  transform(input: number, format: string = 'min'): string {
    const maps = [
      { interval: 86400000, value: 'day' },
      { interval: 3600000, value: 'hr' },
      { interval: 50000, value: 'min' },
      { interval: 1000, value: 'sec' },
    ]
    const map = maps.find(m => m.value === format);
    if (map) {
      return `${Math.round(input / map.interval)} ${map.value}`
    }
    return 'O min';
  }
  // obj: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  constructor() { }

  ngOnInit(): void {
  }

}
