const calcularCorreiosPageLocators = {

  inputs: {

    cepOrigem: () => cy.get('#originPostcode'),
    altura: () => cy.get('#packageHeight'),
    largura: () => cy.get('#packageWidth'),
    comprimento: () => cy.get('#packageDepth'),
    cepDestino: () => cy.get('#destinationPostcode')
  },

  buttons: {

    calcularFreteDesconto: () => cy.get('[data-cy="calculator-submit"]'),
  },

  dropDowns: {

    peso: () => cy.get('#weight'),
    opçãoTrezentosGramas: () => cy.contains('li', 'Até 300g')
  },

  texts: {

    selecioneModalidade: () => cy.contains('p', 'SELECIONE A MODALIDADE'),
    erroAlturaMinima: () => cy.contains('p', 'Altura mínima 0.4 cm.'),
    erroAlturaMaxima: () => cy.contains('p', 'Altura máxima 150 cm.'),
    erroLaguraMinima: () => cy.contains('p', 'Largura mínima 8 cm.'),
    erroLaguraMaxima: () => cy.contains('p', 'Largura máxima 150 cm.'),
    erroComprimentoMinimo: () => cy.contains('p', 'Comprimento mínimo 13 cm.'),
    erroComprimentoMaximo: () => cy.contains('p', 'Comprimento máximo 150 cm.')
  }
}

export default calcularCorreiosPageLocators