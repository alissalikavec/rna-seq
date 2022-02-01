context('App', () => {
  const HALF_SECOND = 500;
    it('should load our app and show canvases after fetching data', () => {
      cy.visit('http://localhost:3000');
      cy.contains('RNA Sequencing');
      cy.get('[data-cy=fetch-btn]')
      cy.contains('Fetch Data').click();
      cy.wait(HALF_SECOND);
      cy.get('.canvasjs-chart-canvas');
      // canvasjs provides two canvases:
      // one for the line chart, the other for zooming
      cy.get('canvas').should('have.length', 2);
    })
  })
