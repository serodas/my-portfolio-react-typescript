import { Language, Languages, ProjectInterface } from "../domain/ProjectInterface";
import { ProjectRepository } from "../domain/ProjectRepository";
import { projects } from "../projects";

export class InMemoryProjectRepository implements ProjectRepository {
	search(): ProjectInterface[] {
		return projects.map((project) => ({
			...project,
			languages: project.languages.map(
				(language: string): Language =>
					Object.values(Languages).find((lang) => lang === language) ?? Languages.Meta
			),
		}));
	}
}
