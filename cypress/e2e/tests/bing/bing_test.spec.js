describe("Test for Bing", () => {
  it("Test login/password data for different environments", () => {
    cy.visit("/");
    cy.get("input[type='search']").type(
      `${Cypress.env("login")} + ${Cypress.env("password")}`
    );
  });
});
