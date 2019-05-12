export class UiModelResultListItem {

	public simpleFilename: string;
	public path: string;
	public teaserText: string;
	public versionLabel: string;
	public numberOfLines: number;
	public fileSize: number;
	
	constructor(simpleFilename: string, path:string, numberOfLines:number, fileSize:number) {
		this.simpleFilename = simpleFilename;
		this.teaserText = "query = 'foo' this is a simple teaser, but be sure to click on that item, if you find this description useful.";
		this.versionLabel = "current";
		this.path = path;
		this.numberOfLines = numberOfLines;
		this.fileSize = fileSize;
	}
}
