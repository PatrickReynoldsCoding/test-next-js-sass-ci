describe("Home page", () => {
  it("User sees hello button", () => {
    cy.visit("/");

    cy.contains("hedllo").should("be.visible");
  });
});