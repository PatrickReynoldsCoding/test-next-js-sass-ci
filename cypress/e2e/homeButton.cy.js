describe("Home page", () => {
  xit("User sees hello button", () => {
    cy.visit("/");

    cy.contains("hello").should("be.visible");
  });
});