
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data-Binding-Example';
  fName="";
  lName="";
  imgUrl="assets/download.png";
  showColor: boolean = false;
  showInfo:boolean = false;
  caption="Show Text";
  showMessage(){
    alert("showMessage is called")}
showdetails()
{
  alert("akshay");

}
showInfoButton():void{
  this.showInfo = !this.showInfo;  
    if (this.showInfo) {  
        this.caption = 'Hide Text';  
    }  
    else {  
        this.caption = 'Show Text';  
    }  


}
changeColor(): void{
  this.showColor = !this.showColor;
  }
  
}