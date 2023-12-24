import { ProjectInterface } from "../domain/ProjectInterface";
import { ProjectRepository } from "../domain/ProjectRepository";
import { projects } from "../projects";

export class InMemoryProjectRepository implements ProjectRepository {
	search(): ProjectInterface[] {
		return projects;
	}
}
