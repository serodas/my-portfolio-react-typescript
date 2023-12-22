import { Outlet } from "react-router-dom";

import { Header } from "./header/Header";
import styles from "./Layout.module.scss";

export const Layout = () => {
	return (
		<>
			<main className={styles.main}>
				<Header />
				<Outlet />
			</main>
		</>
	);
};
