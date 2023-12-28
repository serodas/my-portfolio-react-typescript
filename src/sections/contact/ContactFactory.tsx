import { useThemeContext } from "../../ThemeContextProvider";
import { Contact } from "./Contact";

export const ContactFactory = () => {
	const { theme } = useThemeContext();

	return <Contact theme={theme} />;
};
