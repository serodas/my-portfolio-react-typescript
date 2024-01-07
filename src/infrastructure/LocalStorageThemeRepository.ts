import { Theme } from "../domain/Theme";
import { ThemeRepository } from "../domain/ThemeRepository";

export class LocalStorageThemeRepository implements ThemeRepository {
	localStorageKey = "theme";
	search(): Theme | undefined {
		const theme = localStorage.getItem(this.localStorageKey);
		if (!theme) {
			return undefined;
		}

		return JSON.parse(theme) as Theme;
	}

	save(theme: Theme): void {
		localStorage.setItem(this.localStorageKey, JSON.stringify(theme));
	}
}
