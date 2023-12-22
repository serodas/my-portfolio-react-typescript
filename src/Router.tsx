import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "./sections/layout/Layout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [],
	},
]);

export const Router = () => {
	return <RouterProvider router={router} />;
};
