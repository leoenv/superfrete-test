import calcularCorreiosPageLocators from './locators'

class calcularCorreiosPageSteps {

    acessarCalcularCorreiosPage() {

      cy.visit('/')
      calcularCorreiosPageLocators.buttons.calcularFreteDesconto().should('be.visible')
    }

    inserirCepOrigem() {

      calcularCorreiosPageLocators.inputs.cepOrigem().type('08090-284')
    }

    selecionarPeso() {

      calcularCorreiosPageLocators.dropDowns.peso().click()
      calcularCorreiosPageLocators.dropDowns.opçãoTrezentosGramas().click()
    }

    inserirAlturaValida() {

      calcularCorreiosPageLocators.inputs.altura().type('2')
    }

    inserirAlturaMinimaInvalida() {

      calcularCorreiosPageLocators.inputs.altura().type('0.3')
    }

    validacaoTextoAlturaMinimaInvalida() {

      calcularCorreiosPageLocators.texts.erroAlturaMinima().should('be.visible')
    }
    
    inserirAlturaMaximaInvalida() {

      calcularCorreiosPageLocators.inputs.altura().type('151')
    }

    validacaoTextoAlturaMaximaInvalida() {

      calcularCorreiosPageLocators.texts.erroAlturaMaxima().should('be.visible')
    }

    inserirLarguraValida() {

      calcularCorreiosPageLocators.inputs.largura().type('11')
    }

    inserirLarguraMinimaInvalida() {

      calcularCorreiosPageLocators.inputs.largura().type('7')
    }

    validacaoTextoLarguraMinimaInvalida() {

      calcularCorreiosPageLocators.texts.erroLaguraMinima().should('be.visible')
    }

    inserirLarguraMaximaInvalida() {

      calcularCorreiosPageLocators.inputs.largura().type('151')
    }

    validacaoTextoLarguraMaximaInvalida() {

      calcularCorreiosPageLocators.texts.erroLaguraMaxima().should('be.visible')
    }

    inserirComprimentoValido() {

      calcularCorreiosPageLocators.inputs.comprimento().type('16')
    }

    inserirComprimentoMinimoInvalido() {

      calcularCorreiosPageLocators.inputs.comprimento().type('12')
    }

    validacaoTextoComprimentoMinimoInvalido() {

      calcularCorreiosPageLocators.texts.erroComprimentoMinimo().should('be.visible')
    }

    inserirComprimentoMaximoInvalido() {

      calcularCorreiosPageLocators.inputs.comprimento().type('151')
    }

    validacaoTextoComprimentoMaximoInvalido() {

      calcularCorreiosPageLocators.texts.erroComprimentoMaximo().should('be.visible')
    }

    inserirCepDestino() {

      calcularCorreiosPageLocators.inputs.cepDestino().type('05407-002')
    }

    clicarBotaoCalcularFreteDesconto() {

      calcularCorreiosPageLocators.buttons.calcularFreteDesconto().click()
    }

    validarExibicaoSelecioneModalidade() {

      calcularCorreiosPageLocators.texts.selecioneModalidade().should('be.visible')
    }
  }

export default new calcularCorreiosPageSteps()