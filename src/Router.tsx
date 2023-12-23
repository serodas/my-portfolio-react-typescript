import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Education } from "./sections/education/Education";
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
			{
				path: "/education",
				element: <Education />,
			},
		],
	},
]);

export const Router = () => {
	return <RouterProvider router={router} />;
};
