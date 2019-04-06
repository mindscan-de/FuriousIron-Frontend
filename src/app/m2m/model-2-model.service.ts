import { Injectable } from '@angular/core';

import { UiModelFileContent } from '../detail/ui-model/ui-model-file-content';

@Injectable({
  providedIn: 'root'
})
export class Model2ModelService {

	constructor() { }
  
	transformFileContentToUI( fileContent ) : UiModelFileContent {
		return new UiModelFileContent( fileContent );
	}
}
