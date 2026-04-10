//funções

//login
Cypress.Commands.add('login', (email, senha) => {
    cy.visit('http://localhost:3000/')
    cy.get('#email').type('4dt@gmail.com')
    cy.get('#password').type('4DT')
    cy.contains('button', 'Entrar').click()
})