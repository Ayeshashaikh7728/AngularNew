import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
message: string="message from child3"
msg: string="message from child3 ggggg"
 @Output()  meassageEvent=new EventEmitter<string>();
//  @Output()  meassageEvent2=new EventEmitter<string>();
 
  constructor() { }

  ngOnInit(): void {
  }
sendMessage(): void {
  // this.meassageEvent2.emit(this.msg);
  this.meassageEvent.emit(this.message);
}
}
