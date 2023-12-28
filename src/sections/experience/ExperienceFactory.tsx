import { useThemeContext } from "../../ThemeContextProvider";
import { Experience } from "./Experience";

export const ExperienceFactory = () => {
	const { theme } = useThemeContext();

	return <Experience theme={theme} />;
};
