import { Component, OnInit } from '@angular/core';
// import{model1}
import * as prod from 'src/model1/product.json';
import * as prod2 from 'src/model1/ebook.json';
@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
  title = 'routerExample';
  product: any = (prod as any).default
  tutorial: any = (prod2 as any).default
  constructor() { }

  ngOnInit(): void {
  }

}
