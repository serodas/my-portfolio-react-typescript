import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { EducationFactory } from "./sections/education/EducationFactory";
import { Experience } from "./sections/experience/Experience";
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
				element: EducationFactory.create(),
			},
			{
				path: "/experience",
				element: <Experience />,
			},
		],
	},
]);

export const Router = () => {
	return <RouterProvider router={router} />;
};
