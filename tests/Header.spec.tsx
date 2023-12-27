import { screen } from "@testing-library/react";

import { lightTheme } from "../src/domain/Theme";
import { Header } from "../src/sections/layout/header/Header";
import { renderWithRouter } from "./RenderWithRouter";

describe("Header section", () => {
	it("show all list items", async () => {
		renderWithRouter(<Header theme={lightTheme} />);
		await screen.findByRole("link", {
			name: "Inicio",
		});
	});
});
