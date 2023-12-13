import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  // templateUrl: 
  // Message:{{Message}};
  // <app-child [Message]="receivedMessage"></app-child>
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements OnInit {
receivedMessage: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
