import { Injectable } from '@angular/core';

// Backend-Models 
import { BackendModelQueryResult } from '../backend-service/search-model/backend-model-query-result';

// UI-Models
import { UiModelFileContent } from '../detail/ui-model/ui-model-file-content';
import { UiModelResultListItem } from '../result/ui-model/ui-model-result-list-item';
import { UiModelResultList } from '../result/ui-model/ui-model-result-list';

@Injectable({
  providedIn: 'root'
})
export class Model2ModelService {

	constructor() { }
  
	transformFileContentToUI( fileContent ) : UiModelFileContent {
		return new UiModelFileContent( fileContent );
	}
	
	transformQueryResultToUI( queryResult : BackendModelQueryResult ) : UiModelResultList {
		var uiResult = new UiModelResultList ();
		
		uiResult.numberOfItems = queryResult.numberOfQeueryResults;
		for( let queryItem of queryResult.queryResultItems ) {
			var simpleFilename = queryItem.queryResultSimpleFilename;
			var path = queryItem.queryResultFilePath;
			var numberOfLines = queryItem.numberOfLinesInFile;
			var fileSize = queryItem.fileSize;
			var map = queryItem.classifierMap;
			var teaserText = queryItem.queryResultTeaserText
		
			uiResult.items.push( new UiModelResultListItem( simpleFilename, path, numberOfLines, fileSize, map, teaserText ) );
		}
		
		return uiResult;
	}
}
