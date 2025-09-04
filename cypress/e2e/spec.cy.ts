describe('template spec', () => {
    it('passes', () => {
        cy.visit('/');

        cy.contains('Campus').should('be.visible');
        cy.contains('Contacts').should('be.visible');
        cy.contains('Information').should('be.visible');
        cy.contains('Campus Addresses').should('be.visible');
    });
});
