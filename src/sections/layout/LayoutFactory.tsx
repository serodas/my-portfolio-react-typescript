import { Theme } from "../../domain/Theme";
import { useThemeContext } from "../../ThemeContextProvider";
import { Layout } from "./Layout";

export const LayoutFactory = () => {
	const { theme, setTheme } = useThemeContext();

	return (
		<Layout
			theme={theme as Theme}
			setTheme={setTheme as React.Dispatch<React.SetStateAction<Theme>>}
		/>
	);
};
