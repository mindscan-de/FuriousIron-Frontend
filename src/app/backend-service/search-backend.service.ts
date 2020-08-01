import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CustomEncoder } from './custom-encoder';

import { BackendModelQueryResult } from './search-model/backend-model-query-result';

@Injectable({
  providedIn: 'root'
})
export class SearchBackendService {

	private _cachedFileContentsLocation = "/SearchBackend/rest/cached/content";
	private _queryResultsLocation = "/SearchBackend/rest/search/result";

	constructor( private httpClient : HttpClient ) { }
  

	getFileContent ( path : string, filename : string ) : Observable<string> {
	    let httpParameters = new HttpParams();
	    httpParameters=httpParameters.append('p', path);
		
		return this.httpClient.get ( this._cachedFileContentsLocation , { responseType: 'text', params:httpParameters} )
	}
	
	getQueryResults ( query : string ) : Observable<BackendModelQueryResult> {
	    let httpParameters = new HttpParams({encoder: new CustomEncoder()});
	    httpParameters=httpParameters.append('q', query);
	
		return this.httpClient.get<BackendModelQueryResult>( this._queryResultsLocation, { params:httpParameters} ); 
	}
}

