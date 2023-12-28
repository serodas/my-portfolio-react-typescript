import React, { createContext, useContext, useState } from "react";

import { darkTheme, lightTheme, Theme } from "./domain/Theme";

const ThemeContext = createContext<{ theme: Theme }>({
	theme: lightTheme,
});

export const ThemeContextProvider = ({ children }: { children: React.ReactElement }) => {
	const [theme, setTheme] = useState<Theme>(darkTheme);

	return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => useContext(ThemeContext);