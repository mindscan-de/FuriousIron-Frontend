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
import { HighlightModule } from 'ngx-highlightjs';
import css from 'highlight.js/lib/languages/css';
import java from 'highlight.js/lib/languages/java';
import json from 'highlight.js/lib/languages/json';
import markdown from 'highlight.js/lib/languages/markdown';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';


export function supportedHighlightJsLanguages() {
	return [
	    {name: 'css', func: css},
	    {name: 'java', func: java},
	    {name: 'json', func: json},
	    {name: 'markdown', func: markdown},
	    {name: 'typescript', func: typescript},
	    {name: 'xml', func: xml}
	];
}

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
    HighlightModule.forRoot({
      languages: supportedHighlightJsLanguages
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
