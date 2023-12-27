import { Router } from "./Router";
import { ThemeContextProvider } from "./ThemeContextProvider";

export const App = () => {
	return (
		<ThemeContextProvider>
			<Router />
		</ThemeContextProvider>
	);
};
