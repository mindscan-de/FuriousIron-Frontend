import { UiModelResultListItem } from './ui-model-result-list-item';

export class UiModelResultList {

	public items : UiModelResultListItem[] = [];
	public numberOfItems : number = 0;
	public searchTimeInMilliseconds : number = -1;
	
	constructor () { 
	}
}
