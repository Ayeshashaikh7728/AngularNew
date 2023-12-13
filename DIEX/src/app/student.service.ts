import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor() { }
  getname() {
    return "ayesha is best";
  }
  getStudent(): any[] {
    return [
      { id: 1, name: 'ayesha', age: 22 },
      { id: 2, name: 'joy', age: 22 },
    ];
  }
  
}
