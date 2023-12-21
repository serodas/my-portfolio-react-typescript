import { render, screen } from "@testing-library/react";

import { Header } from "../src/sections/header/Header";
import { ListItems } from "../src/sections/listItem/list_items";

describe("Header section", () => {
	it("show all list items", async () => {
		render(<Header />);
		const firstListItem = ListItems[0];
		const firstHeaderItem = await screen.findByRole("link", {
			name: firstListItem.name,
		});
	});
});
