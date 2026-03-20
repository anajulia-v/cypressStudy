describe('template spec', () => {
  //logar com sucesso
  it('logar com sucesso', () => {
    // cy.viewport(1440, 900)
    cy.visit('http://localhost:3000/')

    //seletores
    cy.get('#email').type('4dt@gmail.com')
    cy.get('#password').type('4DT')

    cy.contains('button', 'Entrar').click()
  })

  //campos em branco 
  it('campo em branco', () => {
    // cy.viewport(1440, 900)
    cy.visit('http://localhost:3000/')

    //seletores
    cy.get('#email')
    cy.get('#password')

    cy.contains('button', 'Entrar').click()

    cy.contains('Ei, não esqueça de digitar seu email!')
    cy.contains('Você precisa de uma senha para entrar! 🔒')

  })

  //campos inválidos
  it('campos inválidos', () => {
    // cy.viewport(1440, 900)
    cy.visit('http://localhost:3000/')

    //seletores
    cy.get('#email').type('3dt@gmail.com')
    cy.get('#password').type('3DT')

    cy.contains('button', 'Entrar').click()

    cy.contains('Acesso negado! Tente novamente.')

  })

})