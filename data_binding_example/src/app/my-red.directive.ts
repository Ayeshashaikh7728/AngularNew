import { Directive,ElementRef,Input } from '@angular/core';

@Directive({
  selector: '[appMyRed]'
})
export class MyRedDirective {

//   constructor(elRef: ElementRef) {
//     console.log(elRef.nativeElement)
//     elRef.nativeElement.style.color = 'red';
//  }
@Input() myColor:string="";

constructor(private elRef: ElementRef) {
  console.log(elRef.nativeElement)
  console.log("This.myColor:- "+this.myColor)
  elRef.nativeElement.style.color = this.myColor;
}
ngAfterViewInit(): void {
console.log("This.myColor:- "+this.myColor)
this.elRef.nativeElement.style.color = this.myColor;
  }




}