/// <reference types="Cypress" />

describe('user should be able to fill the contact us form', ()=>{
    
    beforeEach(()=>{
        cy.fixture('form').then((data)=>{
            globalThis.data =data
        })
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    });
    it('reach the contact us form', ()=>{
        cy.get('[name=contactme]')
        .should('be.visible');
    });

    it('user should be able to fill the contact form', ()=>{
        cy.get('[name="first_name"]')
        .type(data.firstName);

        cy.get('[name="last_name"]')
        .type(data.lastName);

        cy.get('[name="email"]')
        .type(data.email);

        cy.get('textarea.feedback-input')
        .type(data.inputText);
        cy.get('[type="submit"]')
        .click();
        cy.get('h1')
        .invoke('text')
        .should('equal','Thank You for your Message!')
    });

    it('should not submit when required informations are missing', ()=>{

        cy.get('[name="first_name"]')
        .type(data.firstName);
        cy.get('[name="last_name"]')
        .type(data.lastName);
        cy.get('[type="submit"]')
        .click();
        cy.contains('Error: all fields are required')
        .should('be.visible');
    })
});