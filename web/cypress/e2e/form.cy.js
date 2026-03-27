describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

    //login
    cy.visit('http://localhost:3000/')
    cy.get('#email').type('4dt@gmail.com')
    cy.get('#password').type('4DT')
    cy.contains('button', 'Entrar').click()

    //form
    cy.contains('h4', 'Formulários').click()
    
    cy.get('#name').type('User User')
    cy.get('#email').type('user@gmail.com')
    cy.get('#phone').type('11 999996666').should('have.value', '(11) 99999-6666')

    //tipo de consultoria - select 
    cy.get('#consultancyType').select('In Company')

    //tipo de pessoa - radio
    cy.contains('span', 'Pessoa Jurídica').click()
    cy.contains('label', 'Pessoa Física').find('input').should('be.not.checked')

    cy.get('#document').type('12345678901234').should('have.value', '12.345.678/9012-34')

    //onde - checkbox
    const redes = [
      'Instagram',
      'LinkedIn',
      'Udemy',
      'YouTube',
      'Indicação de Amigo'
    ]

    redes.forEach((item) => {
      cy.contains('label', item)
        .find('input').check().should('be.checked')
    })

    //anexo
    cy.get('input[type="file"]').selectFile('./cypress/fixtures/ninja.png', {force:true})

    cy.get('#details').type('Details')

    //enter
    cy.get('#technologies').type('Technology').type('{enter}')

    cy.contains('label', 'Li e aceito os termos de uso *').find('input').check().should('be.checked')
    cy.contains('button', 'Enviar formulário').click()
  })
})