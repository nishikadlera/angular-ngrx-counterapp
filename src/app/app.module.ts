import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterbuttonsComponent } from './components/counterbuttons/counterbuttons.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterdisplayComponent } from './components/counterdisplay/counterdisplay.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './components/state/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterbuttonsComponent,
    CounterComponent,
    CounterdisplayComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({counter : counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
