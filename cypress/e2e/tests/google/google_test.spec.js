describe("Test for Google", () => {
  it("Test login/password data for different environments", () => {
    cy.visit("/");
    cy.get('textarea[type="search"]').type(
      `${Cypress.env("login")} + ${Cypress.env("password")}`
    );
  });
});
