import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./sections/home/Home";
import { Layout } from "./sections/layout/Layout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		],
	},
]);

export const Router = () => {
	return <RouterProvider router={router} />;
};
