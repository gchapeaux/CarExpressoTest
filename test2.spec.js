context('Actions', () => {
	
	it('Remplissage du nom', () => {
	cy.visit('http://10.8.0.1:4000/#/')

        // Connexion

        //cy.get('input[name="username"]').type('demo')
          //  .get('input[name="password"]').type('demo')
            //.get('button[type="submit"]').click()

        // Accès aux commandes
    
        cy.contains('Projets').click({ force: true })

        cy.get('.MuiTableHead-root-236 > .MuiTableRow-root-237 > :nth-child(2) > .RawPlaceholder-root-255').should('not.exist')
        cy.get(':nth-child(1) > :nth-child(2) > .MuiLinearProgress-root-324').should('not.exist')
        // Accès aux commandes annulées

        cy.contains('cancelled').click()      
        
        // Edition d'une commande d'annulée à délivrée

        cy.contains('Edit').click()
        cy.contains('cancelled').click()

        cy.contains('delivered').click()
        cy.contains('Save').click()

	})

    // it('Test des selecteurs', () => {

    //     cy.visit('https://marmelab.com/react-admin-demo/#/login')

    //     // Connexion

    //     cy.get('input[name="username"]').type('demo')
    //         .get('input[name="password"]').type('demo')
    //         .get('button[type="submit"]').click()

    //     cy.contains('react-admin demo').se

    // })
})