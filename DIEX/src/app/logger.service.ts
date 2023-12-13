import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  callStack: string[] = [];

  addLog(message: string): void {
    this.callStack = [message].concat(this.callStack);
    this.printHead();
  }

  clear(): void {
    this.printLog();
    this.callStack = [];
    console.log("DELETED LOG");
  }

  private printHead(): void {
    console.log(this.callStack[0] || null);
   
}

  private printLog(): void {
    // console.log(this.callStack.join('\n'));
    this.callStack.reverse().forEach(log => console.log(log));
  }}
