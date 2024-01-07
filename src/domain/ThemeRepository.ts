import { Theme } from "./Theme";

export interface ThemeRepository {
	search(): Theme | undefined;
	save(theme: Theme): void;
}
