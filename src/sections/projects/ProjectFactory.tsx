import { InMemoryProjectRepository } from "../../infrastructure/InMemoryProjectRepository";
import { useThemeContext } from "../../ThemeContextProvider";
import { Project } from "./Project";

const repository = new InMemoryProjectRepository();

export const ProjectFactory = () => {
	const { theme } = useThemeContext();

	return <Project repository={repository} theme={theme} />;
};
