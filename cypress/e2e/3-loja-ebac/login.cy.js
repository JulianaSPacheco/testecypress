/// <reference types="cypress"/>
describe('funcionalidade: login', () => {
    it ('Deve fazer login com sucesso', () => {
        cy.visit ('http://lojaebac.ebaconline.art.br/my-account/')
        cy.get('#username').type('julianapacheco@outlook.com')
        cy.get('#password'). type('Ju123456!@')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain' ,'A partir do painel de controle de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta.')
    } )
}
)