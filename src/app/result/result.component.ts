import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { SearchBackendService } from '../backend-service/search-backend.service';
import { Model2ModelService } from '../m2m/model-2-model.service';

// UI-Model
import { UiModelResultList } from './ui-model/ui-model-result-list';
import { UiModelResultListItem } from './ui-model/ui-model-result-list-item';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

	public uiModelResultList: UiModelResultList;

	constructor( private activatedRoute : ActivatedRoute, private router : Router, private searchBackend : SearchBackendService , private m2m : Model2ModelService ) {
		this.uiModelResultList = new UiModelResultList();
		  		
  		// subscribe to page parameters		
  		this.activatedRoute.params.subscribe( pageParameters => {
	 		this.onContentPageParametersProvided( pageParameters );
  		});
	}

	ngOnInit() {
	}
	
	onContentPageParametersProvided( pageParameters ):void {
	  	this.searchBackend.getQueryResults( pageParameters.q ).subscribe(
		  	data => this.onQueryResultAvailable (data),
		  	error => this.onQueryResultError(error)
	  	);
  	}
  	
  	onQueryResultAvailable( queryResult ) : void {
  		this.uiModelResultList = this.m2m.transformQueryResultToUI(queryResult);
  	}
  	
  	onQueryResultError( error ) : void {
  		console.log(error);
  	
  		this.uiModelResultList = new UiModelResultList();
  	}

	onSelectSearchResult( item : UiModelResultListItem ) : void {
	  	var path = item.path;
	  	var versionLabel = item.versionLabel;
	  	var fileName = item.simpleFilename;
	  	
	  	this.router.navigate(["/detail", {p:this.encodeWindowsPathToNormalizedPath(path), f: fileName, v: versionLabel } ]);
	}
	
	encodeWindowsPathToNormalizedPath(path):String {
		return path.replace(/\\/g, '/');
	}

}
