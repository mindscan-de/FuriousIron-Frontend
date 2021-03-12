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
import { MainFooterComponent } from './main-footer/main-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchSubmitComponent,
    ResultComponent,
    DetailComponent,
    MainFooterComponent
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
			fullLibraryLoader: () => import('highlight.js'),
/*	        coreLibraryLoader: () => import('highlight.js/lib/highlight'),
	        lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
	        languages: {
	          typescript: () => import('highlight.js/lib/languages/typescript'),
	          css: () => import('highlight.js/lib/languages/css'),
	          xml: () => import('highlight.js/lib/languages/xml'),
			  java: () => import('highlight.js/lib/languages/java'),
			  json: () => import('highlight.js/lib/languages/json'),
			  markdown: () =>import('highlight.js/lib/languages/markdown')
	}
*/			
		}
	}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
