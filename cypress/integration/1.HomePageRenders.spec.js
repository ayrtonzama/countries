describe("Get Home screen details", () => {
  it("Should have on page", () => {
    cy.visit("/");

    // Should have navbar with title
    cy.get("h5").contains("Where in the world?");

    // Should have a theme button
    cy.get(".light-text").contains("Dark Mode");

    // Should have search bar
    cy.get(".search-bar input")
      .invoke("attr", "placeholder")
      .should("contain", "Search for a country...");

    // Countries equals 250
    cy.get(".countries-main")
      .find(".country-card")
      .its("length")
      .should("eq", 250);
  });

  it("Countries loaded on page ", () => {
    cy.visit("/");

    // Countries loaded
    cy.get(".countries-main")
      .find(".country-card")
      .its("length")
      .should("eq", 250);
  });

  it("Theme changes", () => {
    cy.visit("/");

    // Theme word found
    cy.get("#theme-btn").contains("Dark Mode");

    // Toggle theme
    cy.get("#theme-btn").click();

    // Verify Change
    cy.get("body").should("have.css", "background-color", "rgb(32, 44, 55)");
  });

  it("Theme changes to dark", () => {
    cy.visit("/");

    // Theme words found
    cy.get("#theme-btn").contains("Dark Mode");

    // Toggle theme
    cy.get("#theme-btn").click();

    // Verify Dark
    cy.get("body").should("have.css", "background-color", "rgb(32, 44, 55)");
  });

  it("Theme changes light", () => {
    cy.visit("/");

    // Theme is light
    cy.get("body").should("have.css", "background-color", "rgb(250, 250, 250)");
  });
});
