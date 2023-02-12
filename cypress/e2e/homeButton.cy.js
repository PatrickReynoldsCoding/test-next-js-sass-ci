describe("Home page", () => {
  xit("User sees hello button", () => {
    cy.visit("/");

    cy.contains("hedllo").should("be.visible");
  });
});