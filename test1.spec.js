context('Actions', () => {
	
  beforeEach(() => {
    cy.visit('https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal')
  })
  
  var listeRecherche = ['JRR Tolkien', 'C. S. Lewis', 'J. K. Rowling']
  
  listeRecherche.forEach(function(auteur) {
	  
	  it('Remplissage du nom', () => {
		  cy.get('#searchInput')
		  .type(auteur, { delay: 100 })
		  cy.get('#searchform')
		  .submit()
	  })
  })
})