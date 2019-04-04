import { Injectable } from '@angular/core';

// UI-Model
import { UiModelResultList } from './ui-model/ui-model-result-list';
import { UiModelResultListItem } from './ui-model/ui-model-result-list-item';


@Injectable({
  providedIn: 'root'
})
export class ResultMockService {

	constructor() { }
	
	public getResult():UiModelResultList {
		var mockedResult = new UiModelResultList();
		
		mockedResult.numberOfItems = 7;
		mockedResult.items.push (
			new UiModelResultListItem("A.java", "FuriousIron/src/de/mindscan/furiousiron"),
			new UiModelResultListItem("B.java", "FuriousIron/src/de/mindscan/furiousiron"),
			new UiModelResultListItem("C.java", "FuriousIron/src/de/mindscan/furiousiron"),
			new UiModelResultListItem("AC.java", "FuriousIron/src/de/mindscan/furiousiron/a"),
			new UiModelResultListItem("ABB.java", "FuriousIron/src/de/mindscan/furiousiron/a"),
			new UiModelResultListItem("foo.txt", "FuriousIron"),
			new UiModelResultListItem("README.MD", "FuriousIron")
		);
		
		return mockedResult;
	}
}
