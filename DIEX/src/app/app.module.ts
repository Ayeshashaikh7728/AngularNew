import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoggerService } from './logger.service';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { TimeService } from './time.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers:[],
  
  bootstrap: [AppComponent]

  
})
export class AppModule { 


 
}
