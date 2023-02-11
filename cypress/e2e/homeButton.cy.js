describe("Home page", () => {
  it("User sees hello button", () => {
    cy.visit("/");

    cy.contains("hello").should("be.visible");
  });
});