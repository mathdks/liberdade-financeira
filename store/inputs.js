export const state = () => ({
    baseInputs: {
        rendaDesejada: null,
        investimentoMensal: null,
        taxaRetorno: null,
        investimentoAtual: null,
        idadeAtual: null
    }
})

export const mutations = {
    updateRendaDesejada(state, value) {
        state.baseInputs.rendaDesejada = value
    },
    updateInvestimentoMensal(state, value) {
        state.baseInputs.investimentoMensal = value
    },
    updateTaxaRetorno(state, value) {
        state.baseInputs.taxaRetorno = value
    },
    updateInvestimentoAtual(state, value) {
        state.baseInputs.investimentoAtual = value
    },
    updateIdadeAtual(state, value) {
        state.baseInputs.idadeAtual = value
    },
}