import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-submit',
  templateUrl: './search-submit.component.html',
  styleUrls: ['./search-submit.component.css']
})
export class SearchSubmitComponent implements OnInit {

	private currentQueryString: string = "";
	
	constructor( private activatedRoute: ActivatedRoute ) { 
  		// subscribe to page parameters		
  		this.activatedRoute.params.subscribe( pageParameters => {
	 		this.onContentPageParametersProvided( pageParameters );
  		});
	}

	ngOnInit() {
	}
	
	
  	/**
  	 * This method is invoked, when the page parameters are processed and retrieved.
  	 */
	onContentPageParametersProvided( pageParameters ):void {
	  	this.currentQueryString = pageParameters.q;
  	}
	

	onSubmit(): void {
	}
}
