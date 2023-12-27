import { useThemeContext } from "../../ThemeContextProvider";
import { Layout } from "./Layout";

export const LayoutFactory = () => {
	const { theme } = useThemeContext();

	return <Layout theme={theme} />;
};
