export enum Languages {
	Docker = "Docker",
	JavaScript = "JavaScript",
	GitHub = "GitHub",
	Php = "Php",
	Python = "Python",
	React = "React",
	Demo = "Demo",
	TypeScript = "TypeScript",
	Sass = "Sass",
	Django = "Django",
	MySQL = "MySQL",
	Symfony = "Symfony",
	Bootstrap = "Bootstrap",
	jQuery = "jQuery",
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
