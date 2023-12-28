import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ContactFactory } from "./sections/contact/ContactFactory";
import { EducationFactory } from "./sections/education/EducationFactory";
import { ExperienceFactory } from "./sections/experience/ExperienceFactory";
import { HomeFactory } from "./sections/home/HomeFactory";
import { LayoutFactory } from "./sections/layout/LayoutFactory";
import { ProjectFactory } from "./sections/projects/ProjectFactory";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LayoutFactory />,
		children: [
			{
				path: "/",
				element: <HomeFactory />,
			},
			{
				path: "/education",
				element: <EducationFactory />,
			},
			{
				path: "/experience",
				element: <ExperienceFactory />,
			},
			{
				path: "/projects",
				element: <ProjectFactory />,
			},
			{
				path: "/contact",
				element: <ContactFactory />,
			},
		],
	},
]);

export const Router = () => {
	return <RouterProvider router={router} />;
};
