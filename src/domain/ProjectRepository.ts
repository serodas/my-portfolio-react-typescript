import { ProjectInterface } from "./ProjectInterface";

export interface ProjectRepository {
	search(): ProjectInterface[];
}
