import React from "react";

import { InMemoryCertificationRepository } from "../../infrastructure/InMemoryCertificationRepository";
import { Education } from "./Education";

const repository = new InMemoryCertificationRepository();

export class EducationFactory {
	static create(): React.ReactElement {
		return <Education repository={repository} />;
	}
}
