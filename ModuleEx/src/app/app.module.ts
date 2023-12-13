import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Module1Module } from './module1/module1.module';
import { HomeComponent } from './module1/home/home.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Module1Module
    // HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
