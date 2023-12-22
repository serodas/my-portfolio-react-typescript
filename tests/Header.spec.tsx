import { render, screen } from "@testing-library/react";

import { InMemoryListItemRepository } from "../src/infrastructure/InMemoryListItemRepository";
import { Header } from "../src/sections/header/Header";

const repository = new InMemoryListItemRepository();

describe("Header section", () => {
	it("show all list items", async () => {
		render(<Header repository={repository} />);
		const ListItems = repository.search();
		const firstListItem = ListItems[0];
		const firstHeaderItem = await screen.findByRole("link", {
			name: firstListItem.name,
		});
	});
});
