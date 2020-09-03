/// <reference types="Cypress" />

describe('User should be able to use the contact us form', ()=>{
    beforeEach(()=>{
        cy.fixture('form')
        .then((entry)=>{
            globalThis.entry = entry;
        });
        cy.visit('https://automationteststore.com/')
    });
   
    it('Should be able to submit a successful submission via contact us form', ()=>{
      
       //cy.xpath("//a[contains(@href, 'contact')]")
       cy.get("a[href$='contact']")
        .click();
        cy.get('[name=first_name]')
        .type(entry.firstName);
        cy.get('#ContactUsFrm_email')
        .type(entry.email);

        cy.get('[name=enquiry]')
        .type(entry.inputText);

        cy.get("button[title='Submit']")
        .eq(0)
        .click();

        cy.contains('Your enquiry has been successfully sent to the store owner!')
        .should('be.visible');
    });
});