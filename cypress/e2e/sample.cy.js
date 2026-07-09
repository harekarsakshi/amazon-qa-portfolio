describe('My First CI Test', () => {
  it('Visits the ZeroToQA site', () => {
    cy.visit('https://zero-to-qa.vercel.app/')
  })
})
