import { Outlet } from "react-router-dom";

import { Theme } from "../../domain/Theme";
import { LocalStorageThemeRepository } from "../../infrastructure/LocalStorageThemeRepository";
import { ErrorBoundary } from "./ErrorBoundary";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import styles from "./Layout.module.scss";

const repository = new LocalStorageThemeRepository();

export const Layout = ({
	theme,
	setTheme,
}: {
	theme: Theme;
	setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}) => {
	return (
		<>
			<main className={styles.main} style={{ backgroundColor: theme.bodyColor }}>
				<Header theme={theme} setTheme={setTheme} repository={repository} />
				<ErrorBoundary>
					<Outlet />
				</ErrorBoundary>
				<Footer theme={theme} />
			</main>
		</>
	);
};
