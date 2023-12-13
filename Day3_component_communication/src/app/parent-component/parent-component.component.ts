import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',

  // messages: {{message}}
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
parentmesssage: string="heloo i updated child messages"
 parentname: any[]=[
 {
  "id":101,
   "name":"ayesha",
   "age":"25"
 },
 {
  "id":101,
   "name":"shaikh",
   "age":"25"
 }
 ]


  constructor() { }

  ngOnInit(): void {
  }

}
