import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchSubmitComponent } from './search-submit/search-submit.component';
import { ResultComponent } from './result/result.component';
import { DetailComponent } from './detail/detail.component';

/**
 * Declare the languages to highlight
 */
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchSubmitComponent,
    ResultComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,    
    AppRoutingModule,
    HighlightModule    
  ],
  providers: [
	{
		provide: HIGHLIGHT_OPTIONS,
		useValue: {
/* 		fullLibraryLoader: () => import('highlight.js'), */
		}
	}
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
