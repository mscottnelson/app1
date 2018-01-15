import { BrowserModule } from '../../../commons/node_modules/@angular/platform-browser';
import { NgModule } from '../../../commons/node_modules/@angular/core';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
