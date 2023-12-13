import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RestComponent } from './rest/rest.component';

import{HttpClientModule} from '@angular/common/http';
import { NodeserverComponent } from './nodeserver/nodeserver.component';
@NgModule({
  declarations: [
    AppComponent,
    RestComponent,
    NodeserverComponent
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
