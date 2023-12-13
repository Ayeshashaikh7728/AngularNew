import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-nodeserver',
  templateUrl: './nodeserver.component.html',
  styleUrls: ['./nodeserver.component.css']
})
export class NodeserverComponent implements OnInit {
  fruits: any = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("http://localhost:1000/records").subscribe(data =>{
      console.log(data);
      this.fruits = data;
    })
  }

}
