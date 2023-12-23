import { ProjectRepository } from "../domain/ProjectRepository";
import { projects } from "../projects";

export class InMemoryProjectRepository implements ProjectRepository {
	search(): typeof projects {
		return projects;
	}
}
