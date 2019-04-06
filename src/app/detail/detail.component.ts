import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Service
import { SearchBackendService } from '../backend-service/search-backend.service';
import { Model2ModelService } from '../m2m/model-2-model.service';

// UI-Model
import { UiModelFileContent } from './ui-model/ui-model-file-content';
import { UiModelFileMetaData } from './ui-model/ui-model-file-meta-data';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

	private fileMetaData : UiModelFileMetaData;
	private fileContent : UiModelFileContent;

	constructor( private activatedRoute : ActivatedRoute , private searchBackend : SearchBackendService , private m2m : Model2ModelService ) {
		this.fileMetaData = new UiModelFileMetaData("","");
		this.fileContent = new UiModelFileContent("");
	
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
		
		this.searchBackend.getFileContent( path, file ).subscribe(
			data => this.onFileContentProvided( data ),
			error => this.onFileConentNotProvided( error )
		);
	}

	onFileContentProvided( fileContent ) : void {
		this.fileContent = this.m2m.transformFileContentToUI( fileContent );
	}
	
	onFileConentNotProvided( error ) : void {
		this.fileContent = new UiModelFileContent( "The file you asked for could not be retrieved." );
	}
	

  ngOnInit() {
  }

}
