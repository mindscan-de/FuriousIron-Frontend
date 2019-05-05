import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { BackendModelQueryResult } from './search-model/backend-model-query-result';

@Injectable({
  providedIn: 'root'
})
export class SearchBackendService {

	private _cachedSourceFilesLocation = "/assets/mockedfiles";
	// private _mockedQueryResultsLocation = "/assets/mockedrequest/queryresult.json";
	
	private _mockedQueryResultsLocation = "/api/query/result";

	constructor( private httpClient : HttpClient ) { }
  
	getFileContent ( path : string, filename : string ) : Observable<string> {
		// return this.httpClient.get ( this._cachedSourceFilesLocation + "/" + path + "/" + filename, { responseType: 'text'} );
		return this.httpClient.get ( this._cachedSourceFilesLocation + "/" + filename, { responseType: 'text'} );
	}
	
	getQueryResults ( query : string ) : Observable<BackendModelQueryResult> {
	    let params = new HttpParams();
	    params=params.append('q', query);
	
		return this.httpClient.get<BackendModelQueryResult>( this._mockedQueryResultsLocation, { params:params} ); 
	}
}
