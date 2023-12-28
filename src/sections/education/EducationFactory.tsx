import { InMemoryCertificationRepository } from "../../infrastructure/InMemoryCertificationRepository";
import { useThemeContext } from "../../ThemeContextProvider";
import { Education } from "./Education";

const repository = new InMemoryCertificationRepository();

export const EducationFactory = () => {
	const { theme } = useThemeContext();

	return <Education repository={repository} theme={theme} />;
};
