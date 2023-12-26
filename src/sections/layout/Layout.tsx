import { Outlet } from "react-router-dom";

import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import styles from "./Layout.module.scss";

export const Layout = () => {
	return (
		<>
			<main className={styles.main}>
				<Header />
				<Outlet />
				<Footer />
			</main>
		</>
	);
};
