describe("user should be able to login with valid credentials",()=>{
    beforeEach(()=>{
        cy.visit('/auth/sign-in/view?redirect=%2fuser%2fview');
    });
    it("user should be able to reach the login page", ()=>{
        cy.get('h2')
        .invoke('text')
        .should('equal', 'Connexion');
    });

    it('should have an Email field', ()=>{
        cy.get('[name=email]')
        .should('be.visible');      
    });

    it('should have an password field', ()=>{
       
        cy.get('[for=ZoneLogin]')
        .click();
        cy.get('[name=Password]')
        .should('be.visible');
    });

    it('should have a button submit', ()=>{
        cy.get('[type=submit]')
        .should('be.visible');
    });
});