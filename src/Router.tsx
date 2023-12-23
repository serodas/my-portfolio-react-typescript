import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { EducationFactory } from "./sections/education/EducationFactory";
import { Experience } from "./sections/experience/Experience";
import { Home } from "./sections/home/Home";
import { Layout } from "./sections/layout/Layout";
import { ProjectFactory } from "./sections/projects/ProjectFactory";

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
			{
				path: "/projects",
				element: ProjectFactory.create(),
			},
		],
	},
]);

export const Router = () => {
	return <RouterProvider router={router} />;
};
