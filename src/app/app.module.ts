import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchSubmitComponent } from './search-submit/search-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchSubmitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
