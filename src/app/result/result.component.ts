import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// UI-Model
import { UiModelResultList } from './ui-model/ui-model-result-list';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

	private uiModelResultList: UiModelResultList;

	constructor( private activatedRoute: ActivatedRoute ) {
  		// subscribe to page parameters		
  		this.activatedRoute.params.subscribe( pageParameters => {
	 		this.onContentPageParametersProvided( pageParameters );
  		});
	}

	ngOnInit() {
		this.uiModelResultList = new UiModelResultList();
	}
	
	onContentPageParametersProvided( pageParameters ):void {
	  	// TODO: create a search engine request for a result for "pageParameters.q"
  	}
	

}
