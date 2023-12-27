import { useThemeContext } from "../../ThemeContextProvider";
import { Home } from "./Home";

export const HomeFactory = () => {
	const { theme } = useThemeContext();

	return <Home theme={theme} />;
};
