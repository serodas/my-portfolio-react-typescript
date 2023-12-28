import { Outlet } from "react-router-dom";

import { Theme } from "../../domain/Theme";
import { ErrorBoundary } from "./ErrorBoundary";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import styles from "./Layout.module.scss";

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
				<Header theme={theme} setTheme={setTheme} />
				<ErrorBoundary>
					<Outlet />
				</ErrorBoundary>
				<Footer theme={theme} />
			</main>
		</>
	);
};
