import { Component } from '@angular/core';
import * as prod from '../Model/product.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JsondataEX';
  product: any = (prod as any).default
  constructor(){
    console.log(prod);
    
  }
}
