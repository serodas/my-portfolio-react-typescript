import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Contact } from "./sections/contact/Contact";
import { EducationFactory } from "./sections/education/EducationFactory";
import { Experience } from "./sections/experience/Experience";
import { Home } from "./sections/home/Home";
import { LayoutFactory } from "./sections/layout/LayoutFactory";
import { ProjectFactory } from "./sections/projects/ProjectFactory";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LayoutFactory />,
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
				element: <ProjectFactory />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
		],
	},
]);

export const Router = () => {
	return <RouterProvider router={router} />;
};
