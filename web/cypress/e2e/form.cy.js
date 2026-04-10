describe('template spec', () => {

  //TESTE preencher o form com sucesso
  it('preencher o formulário com sucesso', () => {
    cy.login('4dt@gmail.com', '4DT')
    
    cy.contains('h4', 'Formulários').click()

    cy.get('#name').type('User User')
    cy.get('#email').type('user@gmail.com')
    cy.get('#phone').type('11 999996666').should('have.value', '(11) 99999-6666')

    //select 
    cy.get('#consultancyType').select('In Company')

    //radio
    cy.contains('span', 'Pessoa Jurídica').click()
    cy.contains('label', 'Pessoa Física').find('input').should('be.not.checked')

    cy.get('#document').type('12345678901234').should('have.value', '12.345.678/9012-34')

    //checkbox
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

  //TESTE campos em branco
  it('campos em branco', () => {
    cy.login('4dt@gmail.com', '4DT')

    cy.contains('h4', 'Formulários').click()

    cy.get('#name')
    cy.get('#email')
    cy.contains('label', 'Li e aceito os termos de uso *').find('input')

    cy.contains('button', 'Enviar formulário').click()

    cy.contains('p', 'Campo obrigatório')
    .should('be.visible')
    .and('have.class', 'text-red-400')
    .and('have.css', 'color', 'rgb(248, 113, 113)')

    cy.contains('Campo obrigatório')
    .should('be.visible')
    .and('have.class', 'text-red-400')
    .and('have.css', 'color', 'rgb(248, 113, 113)')

    cy.contains('Você precisa aceitar os termos de uso')
    .should('be.visible')
    .and('have.class', 'text-red-400')
    .and('have.css', 'color', 'rgb(248, 113, 113)')
  })

})