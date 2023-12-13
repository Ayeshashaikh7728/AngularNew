import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumberComponentComponent } from './number-component/number-component.component';
import { ReverseStrPipe } from './reverse-str.pipe';
import { PowerBoostCalculatorComponentComponent } from './power-boost-calculator-component/power-boost-calculator-component.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { FileSizePipe } from './file-size.pipe';
import { FilterExampleComponent } from './filter-example/filter-example.component';
import { DateFormatPipePipe } from './date-format-pipe.pipe';
import { NamePipePipePipe } from './name-pipe-pipe.pipe';
import { PowerPipe } from './power.pipe';
import { TimeFormatComponent } from './time-format/time-format.component';
// import { NgModel } from '@angular/forms';
// import{ NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NumberComponentComponent,
    ReverseStrPipe,
    PowerBoostCalculatorComponentComponent,
    ExponentialStrengthPipe,
    FileSizePipe,
    FilterExampleComponent,
    DateFormatPipePipe,
    NamePipePipePipe,
    PowerPipe,
    TimeFormatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // NgModel,
    // NgForm
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
