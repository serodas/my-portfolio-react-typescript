describe("The Home Page", () => {
	it("successfully loads", () => {
		cy.visit("/");
		cy.findByRole("heading", {
			name: /Hola 👋./i,
		}).should("exist");
	});
});
