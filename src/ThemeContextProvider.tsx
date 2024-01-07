import React, { createContext, useContext, useEffect, useState } from "react";

import { darkTheme, Theme } from "./domain/Theme";
import { ThemeRepository } from "./domain/ThemeRepository";

interface ThemeContextProps {
	theme: Theme | unknown;
	setTheme: React.Dispatch<React.SetStateAction<Theme>> | unknown;
}

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const ThemeContextProvider = ({
	children,
	repository,
}: {
	children: React.ReactElement;
	repository: ThemeRepository;
}) => {
	const [theme, setTheme] = useState<Theme | unknown>({});

	useEffect(() => {
		const theme = repository.search() ?? darkTheme;
		setTheme(theme);
	}, [repository]);

	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => useContext(ThemeContext);
