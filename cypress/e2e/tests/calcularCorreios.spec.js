import calcularCorreiosPageSteps from '../../support/pages/CalcularCorreios/steps'

describe('Calcular Correios Feature', () => {
    
    beforeEach(() => {
      
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.window().then((win) => {
        win.sessionStorage.clear();
      });
      
      calcularCorreiosPageSteps.acessarCalcularCorreiosPage()
    })
  
    it("Calcular frete com sucesso", () => {

      calcularCorreiosPageSteps.inserirCepOrigem()
      calcularCorreiosPageSteps.selecionarPeso()
      calcularCorreiosPageSteps.inserirAlturaValida()
      calcularCorreiosPageSteps.inserirLarguraValida()
      calcularCorreiosPageSteps.inserirComprimentoValido()
      calcularCorreiosPageSteps.inserirCepDestino()
      calcularCorreiosPageSteps.clicarBotaoCalcularFreteDesconto()
      calcularCorreiosPageSteps.validarExibicaoSelecioneModalidade()
    })

    it("Calcular frete inserindo altura mínima inválida", () => {

      calcularCorreiosPageSteps.inserirCepOrigem()
      calcularCorreiosPageSteps.selecionarPeso()
      calcularCorreiosPageSteps.inserirAlturaMinimaInvalida()
      calcularCorreiosPageSteps.inserirLarguraValida()
      calcularCorreiosPageSteps.inserirComprimentoValido()
      calcularCorreiosPageSteps.inserirCepDestino()
      calcularCorreiosPageSteps.clicarBotaoCalcularFreteDesconto()
      calcularCorreiosPageSteps.validacaoTextoAlturaMinimaInvalida()
    })

    it("Calcular frete inserindo altura máxima inválida", () => {

      calcularCorreiosPageSteps.inserirCepOrigem()
      calcularCorreiosPageSteps.selecionarPeso()
      calcularCorreiosPageSteps.inserirAlturaMaximaInvalida()
      calcularCorreiosPageSteps.inserirLarguraValida()
      calcularCorreiosPageSteps.inserirComprimentoValido()
      calcularCorreiosPageSteps.inserirCepDestino()
      calcularCorreiosPageSteps.clicarBotaoCalcularFreteDesconto()
      calcularCorreiosPageSteps.validacaoTextoAlturaMaximaInvalida()
    })

    it("Calcular frete inserindo lagura mínima inválida", () => {

      calcularCorreiosPageSteps.inserirCepOrigem()
      calcularCorreiosPageSteps.selecionarPeso()
      calcularCorreiosPageSteps.inserirAlturaValida()
      calcularCorreiosPageSteps.inserirLarguraMinimaInvalida()
      calcularCorreiosPageSteps.inserirComprimentoValido()
      calcularCorreiosPageSteps.inserirCepDestino()
      calcularCorreiosPageSteps.clicarBotaoCalcularFreteDesconto()
      calcularCorreiosPageSteps.validacaoTextoLarguraMinimaInvalida()
    })

    it("Calcular frete inserindo lagura máxima inválida", () => {

      calcularCorreiosPageSteps.inserirCepOrigem()
      calcularCorreiosPageSteps.selecionarPeso()
      calcularCorreiosPageSteps.inserirAlturaValida()
      calcularCorreiosPageSteps.inserirLarguraMaximaInvalida()
      calcularCorreiosPageSteps.inserirComprimentoValido()
      calcularCorreiosPageSteps.inserirCepDestino()
      calcularCorreiosPageSteps.clicarBotaoCalcularFreteDesconto()
      calcularCorreiosPageSteps.validacaoTextoLarguraMaximaInvalida()
    })

    it("Calcular frete inserindo comprimento mínimo inválido", () => {

      calcularCorreiosPageSteps.inserirCepOrigem()
      calcularCorreiosPageSteps.selecionarPeso()
      calcularCorreiosPageSteps.inserirAlturaValida()
      calcularCorreiosPageSteps.inserirLarguraValida()
      calcularCorreiosPageSteps.inserirComprimentoMinimoInvalido()
      calcularCorreiosPageSteps.inserirCepDestino()
      calcularCorreiosPageSteps.clicarBotaoCalcularFreteDesconto()
      calcularCorreiosPageSteps.validacaoTextoComprimentoMinimoInvalido()
    })

    it("Calcular frete inserindo comprimento máximo inválido", () => {

      calcularCorreiosPageSteps.inserirCepOrigem()
      calcularCorreiosPageSteps.selecionarPeso()
      calcularCorreiosPageSteps.inserirAlturaValida()
      calcularCorreiosPageSteps.inserirLarguraValida()
      calcularCorreiosPageSteps.inserirComprimentoMaximoInvalido()
      calcularCorreiosPageSteps.inserirCepDestino()
      calcularCorreiosPageSteps.clicarBotaoCalcularFreteDesconto()
      calcularCorreiosPageSteps.validacaoTextoComprimentoMaximoInvalido()
    })
})