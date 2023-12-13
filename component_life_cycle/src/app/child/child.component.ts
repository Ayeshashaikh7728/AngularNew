import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 @Input() carbitary: string=""
 lifecheck:number=0


 destroy: boolean = true;
  toggleDestroy() {
    this.destroy = !this.destroy;
  }

  constructor() { }
  ngOnChanges() {  
   console.log(`child constructor is called with `); 
    this.lifecheck++; 
}  
  ngOnInit(): void {
  }

}
