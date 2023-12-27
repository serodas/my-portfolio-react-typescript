import { Outlet } from "react-router-dom";

import { Theme } from "../../domain/Theme";
import { ErrorBoundary } from "./ErrorBoundary";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import styles from "./Layout.module.scss";

export const Layout = ({ theme }: { theme: Theme }) => {
	return (
		<>
			<main className={styles.main} style={{ backgroundColor: theme.bodyColor }}>
				<Header theme={theme} />
				<ErrorBoundary>
					<Outlet />
				</ErrorBoundary>
				<Footer />
			</main>
		</>
	);
};
