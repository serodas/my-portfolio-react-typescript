export enum ListItemEnum {
	Home = "home",
	Education = "education",
	Experience = "experience",
	Projects = "projects",
	Contact = "contact",
}

export interface ListItemInterface {
	name: string;
	url: string;
	type: ListItemEnum;
}

const home: ListItemInterface = {
	name: "Inicio",
	url: "/",
	type: ListItemEnum.Home,
};

const education: ListItemInterface = {
	name: "Educación",
	url: "/education",
	type: ListItemEnum.Education,
};

const experience: ListItemInterface = {
	name: "Experiencia",
	url: "/experience",
	type: ListItemEnum.Experience,
};

const projects: ListItemInterface = {
	name: "Proyectos",
	url: "/projects",
	type: ListItemEnum.Projects,
};

const contact: ListItemInterface = {
	name: "Contacto",
	url: "/contact",
	type: ListItemEnum.Contact,
};

export const ListItems: ListItemInterface[] = [home, education, experience, projects, contact];
