import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }
  displayTime()
  {
    // console.log (new Date().getTime().toLocaleString());
    console.log(new Date().toLocaleString());
  }
}
