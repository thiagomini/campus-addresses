describe('template spec', () => {
    it('I can see the home page', () => {
        cy.visit('/');

        cy.contains('Campus');
    });
});
