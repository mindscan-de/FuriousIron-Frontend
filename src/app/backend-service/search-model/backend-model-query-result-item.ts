export class BackendModelQueryResultItem {

	public queryResultSimpleFilename: string;
	public queryResultFilePath: string;
	public numberOfLinesInFile: number;
	public fileSize: number;
	public classifierMap: Map<string, string>;
	
	public queryResultVerInformation: string;
	
	public preview: Map<number,string>;
}
