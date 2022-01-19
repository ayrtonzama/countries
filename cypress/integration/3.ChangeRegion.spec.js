describe("Changing region filters the list", () => {
  it("Should have less items than full list", () => {
    cy.visit("/");

    // Get regions if it works
    cy.get("#select-region").click().get("li").its("length").should("eq", 6);
  });
});
