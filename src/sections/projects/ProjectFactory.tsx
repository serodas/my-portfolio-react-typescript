import { InMemoryProjectRepository } from "../../infrastructure/InMemoryProjectRepository";
import { Project } from "./Project";

const repository = new InMemoryProjectRepository();

export const ProjectFactory = () => {
	return <Project repository={repository} />;
};
