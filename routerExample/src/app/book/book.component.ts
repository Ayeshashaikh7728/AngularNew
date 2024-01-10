import { Component, OnInit } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';
import * as ebooks from 'src/Model1/ebook9o0u .json';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  // id:any;
 
  // book:any;

  // constructor(private _Activatedroute:ActivatedRoute){
  //   console.log("BookComponent")
  //    this._Activatedroute.params.subscribe(params => { 
  //     console.log(params)
  //       this.id = params['id']; 
  //       console.log(this.id)
  //   });


  //  }
  id:any;
  tutorials: any = (ebooks as any).default;
  selectedRecord:any;
  constructor(private _Activatedroute:ActivatedRoute){
    console.log("BookComponent")
     this._Activatedroute.params.subscribe(params => { 
      // console.log(params)
        this.id = params['id']; 
        // console.log(this.id)
        let filteredElements=this.tutorials.filter((element:any) =>{ if(element.id==this.id) return element});
        console.log(filteredElements[0])
        this.selectedRecord=filteredElements[0]
    });}

  ngOnInit(): void {
   
  }

  
}