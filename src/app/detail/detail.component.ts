import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// UI-Model
import { UiModelFileMetaData } from './ui-model/ui-model-file-meta-data';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

	private fileMetaData : UiModelFileMetaData;

	constructor( private activatedRoute: ActivatedRoute ) {
		this.fileMetaData = new UiModelFileMetaData("","");
	
  		// subscribe to page parameters		
  		this.activatedRoute.params.subscribe( pageParameters => {
	 		this.onContentPageParametersProvided( pageParameters );
  		});
	} 
	
	onContentPageParametersProvided( params ) : void {
		var path = params.p;
	  	var file = params.f;
  		var version = params.v;
  	
		this.fileMetaData = new UiModelFileMetaData( path , file );
	}


  ngOnInit() {
  }

}
