import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search-submit',
  templateUrl: './search-submit.component.html',
  styleUrls: ['./search-submit.component.css']
})
export class SearchSubmitComponent implements OnInit {

	public currentQueryString: string = "";
	
	constructor( private activatedRoute: ActivatedRoute, private router: Router ) { 
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
		var queryParameterQ = this.currentQueryString;
		this.router.navigate( [ '/result', {q:queryParameterQ }]);
	}
}
