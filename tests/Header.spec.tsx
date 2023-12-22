import { render, screen } from "@testing-library/react";

import { Header } from "../src/sections/layout/header/Header";

describe("Header section", () => {
	it("show all list items", async () => {
		render(<Header />);
		await screen.findByRole("link", {
			name: "Inicio",
		});
	});
});
