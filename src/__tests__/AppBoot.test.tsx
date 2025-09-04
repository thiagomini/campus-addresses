import { App } from '../App';

describe('Booting the app', () => {
    it('successfully boots the app', () => {
        cy.mount(<App />, '/');

        cy.contains('Campus').should('be.visible');
    });
});
