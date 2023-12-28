import { screen } from "@testing-library/react";

import { lightTheme } from "../src/domain/Theme";
import { Header } from "../src/sections/layout/header/Header";
import { renderWithRouter } from "./RenderWithRouter";

describe("Header section", () => {
	it("show all list items", async () => {
		const setThemeMock = jest.fn();
		renderWithRouter(<Header theme={lightTheme} setTheme={setThemeMock} />);
		await screen.findByRole("link", {
			name: "Inicio",
		});
	});
});
