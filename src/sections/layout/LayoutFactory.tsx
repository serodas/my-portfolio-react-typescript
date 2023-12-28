import { useThemeContext } from "../../ThemeContextProvider";
import { Layout } from "./Layout";

export const LayoutFactory = () => {
	const { theme, setTheme } = useThemeContext();

	return <Layout theme={theme} setTheme={setTheme} />;
};
