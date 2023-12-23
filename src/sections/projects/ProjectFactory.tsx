import React from "react";

import { InMemoryProjectRepository } from "../../infrastructure/InMemoryProjectRepository";
import { Project } from "./Project";

const repository = new InMemoryProjectRepository();

export class ProjectFactory {
	static create(): React.ReactElement {
		return <Project repository={repository} />;
	}
}
