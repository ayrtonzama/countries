describe("Search for country", () => {
  it("Country should be searched and found", () => {
    cy.visit("/");
    //     // Check for germany in autcomplete
    cy.get(".search-bar input").type("Germany");

    //     // Count for elements of countries
    cy.get(".countries-main")
      .find(".CountryCard")
      .its("length")
      .should("eq", 1);
    // })
  });
  it("Country should not exist", () => {
    cy.visit("/");
    // Check for germany in autcomplete
    cy.get(".search-bar input").type("lamp");

    cy.get(".countries-main").find(".CountryCard").should("not.exist");
  });
});
