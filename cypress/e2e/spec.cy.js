describe("User login and navigation", () => {
  it("should allow user to log in with valid credentials and navigate sidebar", () => {
    cy.visit("http://localhost:5173/");

    
    cy.url().should("include", "/login");

    
    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123456")
      .should("have.value", "123456");

    
    cy.get("button").contains("Login").click();

    
    cy.get("nav").should("be.visible");
    cy.get("header").should("be.visible");

    
    cy.get("a").contains("Balances").click();
    cy.url().should("include", "/balance");

    cy.get("a").contains("Expenses").click();
    cy.url().should("include", "/expense");

    cy.get("a").contains("Goals").click();
    cy.url().should("include", "/goal");
  });

  it("should not allow user to log in with invalid credentials", () => {
    cy.visit("http://localhost:5173/");

    
    cy.url().should("include", "/login");

    
    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123")
      .should("have.value", "123");

    
    cy.get("button").contains("Login").click();

    
    cy.get("div").contains("Wrong Password").should("be.visible");
  });
});
