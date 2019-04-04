export class UiModelResultListItem {

	public simpleFilename: string;
	public path: string;
	public teaserText: string;
	public versionLabel: string;
	
	constructor(simpleFilename: string, path:string) {
		this.simpleFilename = simpleFilename;
		this.teaserResultText = "query = 'foo' this is a simple teaser, but be sure to click on that item, if you find this description useful.";
		this.versionLabel = "current";
		this.path = path;
	}
}
