import { Component, OnInit ,Input} from '@angular/core';
// import { Input } from '@angular/core';
@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
 @Input() childmessage: string=""
 @Input() childMesssage2:any[]=[];
  

 message="hello Ayesha"
  constructor() { }

  ngOnInit(): void {
  }

}
