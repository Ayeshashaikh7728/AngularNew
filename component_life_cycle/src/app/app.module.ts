import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LifecyclemethodComponent } from './lifecyclemethod/lifecyclemethod.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { RestComponent } from './rest/rest.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecyclemethodComponent,
    ChildComponent,
    Child2Component,
    RestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
