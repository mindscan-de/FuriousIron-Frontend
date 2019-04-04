import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class SearchBackendService {

	private _cachedSourceFilesLocation = "/assets/mockedfiles";

	constructor( private httpClient : HttpClient ) { }
  
	getFileContent ( path : string, filename : string ) : Observable<string> {
		// return this.httpClient.get ( this._cachedSourceFilesLocation + "/" + path + "/" + filename, { responseType: 'text'} );
		return this.httpClient.get ( this._cachedSourceFilesLocation + "/README.md", { responseType: 'text'} );
	}
}
