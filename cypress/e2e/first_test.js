/// <reference types="Cypress" />
import moment from 'moment';

Cypress.Commands.add('getFormattedDate', (selector) => {
    return cy.get(selector).invoke('text').then((text) => {
        // Extract date parts from the text
        const dateParts = text.split(' ');
        const month = dateParts[0];
        const day = dateParts[1].replace(',', '');
        const dayOfWeek = dateParts[2];

    =
        return moment(`${month} ${day}`, 'MMMM D').format('MMMMDD dddd');
    });
});

describe('new assertions', () => {
    beforeEach(() => {
        cy.visit('https://www.almosafer.com/ar');
        cy.get('.cta__saudi').click();
        cy.get('[data-testid="Header__LanguageSwitch"]').click();
    });

    it('check if the departure date is equal to today + 1', () => {
        cy.getFormattedDate('[data-testid="FlightSearchBox__FromDateButton"]').should(
            'eq',
            moment().add(1, 'day').format('MMMMDD dddd')
        );
    });

    it('check if the return date is equal to today + 2', () => {
        cy.getFormattedDate('[data-testid="FlightSearchBox__ToDateButton"]').should(
            'eq',
            moment().add(2, 'days').format('MMMMDD dddd')
        );
    });

    it('check if the class is economy by default', () => {
        cy.get('.sc-jWxkHr').should('include.text', 'Economy');
    });
});
