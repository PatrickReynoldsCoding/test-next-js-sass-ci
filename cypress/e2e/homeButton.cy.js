describe("Home page", () => {
  it("User sees hello button", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("hello").should("be.visible");
  });
});

describe("Home page", () => {
  it("User sees hello button", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("hellasdo").should("be.visible");
  });
});