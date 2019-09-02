describe('Sample component works as expected', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200');
    });

    it('should be able to submit the form correctly', () => {
        // Arrange
        cy.get('#matSelectSample').click();
        cy.get('mat-option').contains('Option 1').click();
        cy.get('#requiredInput').type('sample');

        // Act
        cy.get('#submitButton').click();

        // Assert
        cy.get('#submissionMessage').should('exist');
        cy.get('#submissionMessage').should('have.text', 'Form Submited!');
    });
});
