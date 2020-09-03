describe("User should be able to login only with valid credentials",()=>{
    beforeEach(()=>{
        cy.visit('/auth/sign-in/view?redirect=%2fuser%2fview');
        cy.fixture('credentials').then((data)=>{
            globalThis.data = data;
        });
        
        cy.get('[name=Email')
        .as('email');
        cy.get('[for=ZoneLogin]')
        .as('zoneLogin');
        cy.get('[name=Password]')
        .as('password');
    });
    it("login with valid credentials", ()=>{
       cy.get('@email')
       .type(data.valid_email);
       cy.get('@zoneLogin')
       .click();
       cy.get('@password')
       .type(data.valid_password);

       cy.get('.serious')
       .click();

       cy.get('[data-auth]')
       .should('be.visible');
    });

    it("login with wrong credentials", ()=>{
     
       cy.get('@email')
       .type(data.valid_email);
       cy.get('@zoneLogin')
       .click();
       cy.get('@password')
       .type(data.invalid_password);

       cy.get('.serious')
       .click();
       cy.get('.error')
       .should('be.visible');
    });

    it("login with missing passord", ()=>{
        cy.get('@email')
        .type(data.valid_email);
        cy.get('@zoneLogin')
        .click();
        cy.get('.serious')
        .click();
        cy.get('#Password-error')
        .should('be.visible');
    });

    it("login with missing email", ()=>{
        cy.get('@zoneLogin')
        .click();
        cy.get('.serious')
        .click();
        cy.get('#Email-error')
        .should('be.visible');
    });

});