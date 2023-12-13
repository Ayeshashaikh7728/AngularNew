import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';
import { MyRedDirective } from './my-red.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgForExampleComponent,
    MyRedDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
