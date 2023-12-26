import { Outlet } from "react-router-dom";

import { ErrorBoundary } from "./ErrorBoundary";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import styles from "./Layout.module.scss";

export const Layout = () => {
	return (
		<>
			<main className={styles.main}>
				<Header />
				<ErrorBoundary>
					<Outlet />
				</ErrorBoundary>
				<Footer />
			</main>
		</>
	);
};
