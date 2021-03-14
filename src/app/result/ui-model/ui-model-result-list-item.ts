export class UiModelResultListItem {

	public simpleFilename: string;
	public path: string;
	public versionLabel: string;
	public numberOfLines: number;
	public fileSize: number;
	public classifierMap: Map<string, string>;
	public preview: Map<number, string>;
	
	constructor(simpleFilename: string, path:string, numberOfLines:number, fileSize:number, classifierMap:Map<string,string>, preview:Map<number, string>) {
		this.simpleFilename = simpleFilename;
		this.versionLabel = "current";
		this.path = path;
		this.numberOfLines = numberOfLines;
		this.fileSize = fileSize;
		this.classifierMap = classifierMap;
		this.preview = (preview!=null) ? preview : new Map<number, string>();
	}
}
