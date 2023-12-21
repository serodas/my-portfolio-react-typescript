import { render, screen } from "@testing-library/react";

import { ListItems } from "../src/list_items";
import { Header } from "../src/sections/header/Header";

describe("Header section", () => {
	it("show all list items", async () => {
		render(<Header />);
		const firstListItem = ListItems[0];
		const firstHeaderItem = await screen.findByRole("link", {
			name: firstListItem.name,
		});
	});
});
