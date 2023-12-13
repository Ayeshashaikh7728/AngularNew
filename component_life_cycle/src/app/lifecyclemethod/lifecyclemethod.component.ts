import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecyclemethod',
  templateUrl: './lifecyclemethod.component.html',
  styleUrls: ['./lifecyclemethod.component.css']
})
export class LifecyclemethodComponent implements OnInit {

  data:number=100;  
  arbitary:string="initial";
  
  constructor() {  
       
      console.log(`new - data is ${this.data}`);  
      setTimeout(() => {
        this.arbitary = 'final';
      }, 5000);
  }  
    
  ngOnChanges() {  
      console.log(`ngOnChanges - data is ${this.data}`);  
  }  

  ngOnInit() {  
      console.log(`ngOnInit  - data is ${this.data}`);  
  }  

  ngDoCheck() {  
      console.log("ngDoCheck")  
  }  

  ngAfterContentInit() {  
      console.log("ngAfterContentInit");  
  }  

  ngAfterContentChecked() {  
      console.log("ngAfterContentChecked");  
  }  

  ngAfterViewInit() {  
      console.log("ngAfterViewInit");  
  }  

  ngAfterViewChecked() {  
      console.log("ngAfterViewChecked");  
  }  

  ngOnDestroy() {  
      console.log("ngOnDestroy");  
  }  

  fnAddNumber():void{  
      this.data+=100;  
  }  

  deleteNumber():void{  
      this.data -=10;  
  }  


}
