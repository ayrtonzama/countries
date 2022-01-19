describe("Search for country", () => {
  it("Country should be searched and found", () => {
    cy.visit("/");

    // Check for germany in autcomplete wait and then count equals
    cy.get(".search-bar input")
      .type("Germany")
      .wait(1800)
      .get(".countries-main")
      .find(".country-card")
      
      .its("length")
      .should("eq",1);
      
  });

  it("Country should not exist", () => {
    cy.visit("/");

    // Check for germany in autcomplete
    cy.get(".search-bar input").type("lamp");

    // Doesnt exist check
    cy.get(".countries-main").find(".country-card").should("not.exist");
  });
});
