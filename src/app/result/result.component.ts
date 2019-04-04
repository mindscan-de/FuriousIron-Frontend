import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Mock
import { ResultMockService } from './result-mock.service';

// UI-Model
import { UiModelResultList } from './ui-model/ui-model-result-list';
import { UiModelResultListItem } from './ui-model/ui-model-result-list-item';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

	private uiModelResultList: UiModelResultList;

	constructor( private activatedRoute: ActivatedRoute, private resultMockService: ResultMockService ) {
		this.uiModelResultList = new UiModelResultList();
		  		
  		// subscribe to page parameters		
  		this.activatedRoute.params.subscribe( pageParameters => {
	 		this.onContentPageParametersProvided( pageParameters );
  		});
	}

	ngOnInit() {
	}
	
	onContentPageParametersProvided( pageParameters ):void {
	  	// TODO: create a search engine request for a result for "pageParameters.q"
	  	
	  	this.uiModelResultList = this.resultMockService.getResult();
  	}
	

}
