import { BackendModelQueryResultItem } from './backend-model-query-result-item';

export class BackendModelQueryResult {

	public numberOfQeueryResults : number = 0;
	public searchTimeInMillis : number = -1;
	public queryResultItems : BackendModelQueryResultItem[] = []; 

}
