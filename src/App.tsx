import { LocalStorageThemeRepository } from "./infrastructure/LocalStorageThemeRepository";
import { Router } from "./Router";
import { ThemeContextProvider } from "./ThemeContextProvider";

const repository = new LocalStorageThemeRepository();

export const App = () => {
	return (
		<ThemeContextProvider repository={repository}>
			<Router />
		</ThemeContextProvider>
	);
};
