export enum Languages {
	Meta = "Meta",
	Docker = "Docker",
}

export type Language = keyof typeof Languages;

export interface ProjectInterface {
	id: string;
	title: string;
	description: string;
	languages: Language[];
	github_url: string;
	website_url: string;
}
