import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import stock from 'highcharts/modules/stock.src';
import more from 'highcharts/highcharts-more.src';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [stock, more];
}

@NgModule({
  imports: [BrowserModule,
    HttpModule,
    ChartModule],
  
  bootstrap: [AppComponent],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules } // add as factory to your providers
  ],
  declarations: [
    AppComponent
  ],
    
})
export class AppModule { }
