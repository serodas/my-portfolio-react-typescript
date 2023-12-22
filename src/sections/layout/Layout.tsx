import { Outlet } from "react-router-dom";

import { Header } from "./header/Header";

export const Layout = () => {
	return (
		<>
			<Header />
			<h1>Hola 👋.</h1>
			<Outlet />
		</>
	);
};
