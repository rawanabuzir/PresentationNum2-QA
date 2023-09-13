/// <reference types="Cypress" />
import moment from 'moment';

describe('new assertions', () => {
    beforeEach(() => {
        cy.visit('https://www.almosafer.com/ar');
        cy.get('.cta__saudi').click();
        cy.get('[data-testid="Header__LanguageSwitch"]').click();
    });

    it('check if the departure date is equal to today + 1', () => {
        const tomorrowDate = moment().add(1, 'day');
        const formattedDate = tomorrowDate.format('MMMMDD dddd'); // Match the actual format

        cy.get('[data-testid="FlightSearchBox__FromDateButton"]').should(
            'include.text',
            formattedDate
        );
    });

    it('check if the return date is equal to today + 2', () => {
        const returnDate = moment().add(2, 'days');
        const returnFormatted = returnDate.format('MMMMDD dddd'); // Match the actual format

        cy.get('[data-testid="FlightSearchBox__ToDateButton"]').should(
            'include.text',
            returnFormatted
        );
    });

    it('check if the class is economy by default', () => {
        cy.get('.sc-jWxkHr').should('include.text', 'Economy');
    });
});