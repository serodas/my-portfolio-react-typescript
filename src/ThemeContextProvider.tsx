import React, { createContext, useContext, useState } from "react";

import { darkTheme, Theme } from "./domain/Theme";

interface ThemeContextProps {
	theme: Theme;
	setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const ThemeContextProvider = ({ children }: { children: React.ReactElement }) => {
	const [theme, setTheme] = useState<Theme>(darkTheme);

	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => useContext(ThemeContext);
