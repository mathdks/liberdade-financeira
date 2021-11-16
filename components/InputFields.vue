<template>
    <section class="flex flex-col items-center mt-10 font-mono px-5 lg:px-0">
        <ShowForm 
            :step="step"
            :execs="execs"
            @showForm="showForm()" 
        />
        <div  
            v-show="step === 2"
            class="w-full lg:w-1/2 flex flex-col items-center"
        >
            <div class="flex flex-col items-center justify-center">
                <RendaDesejada />
                <InvestimentoMensal />
                <TaxaRetorno />
                <AlertItem />
                <InvestimentoAtual />
                <IdadeAtual />
            </div>
            <RestartForm
                :tempoInvestido="tempoInvestido"
                :idadeLivre="idadeLivre"
                @restartForm="reiniciar()" 
            />
        </div>
        <ResultadoLiberdade
            :tempoInvestido="tempoInvestido"
            :idadeLivre="idadeLivre"
            :totalInvestido="totalInvestido"
        />
    </section>
</template>

<script>
export default {
    data() {
        return {
            step: 1,
            execs: null
        }
    },
    computed: {
        baseItems(){
            return this.$store.state.inputs.baseInputs
        },
        totalInvestido(){
            /*
            *   totalInvestido = Montante final investido
            *   Cálculo da perpetuidade: VP = PMT / i
            *   Adaptada fica: totalInvestido = rendaDesejada / taxaRetorno %
            */
            if(this.baseItems.rendaDesejada !== null && this.baseItems.taxaRetorno !== null){
                var taxaInvest = (this.baseItems.taxaRetorno/100).toLocaleString('pt-BR', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2})
                var totalInvestido = this.baseItems.rendaDesejada / (this.baseItems.taxaRetorno/100)
                var totalInvestidoReal = totalInvestido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                return {
                    numero: totalInvestido,
                    conteudo: 'Você precisa investir um total de ' + totalInvestidoReal + ' a uma taxa de ' + taxaInvest + ' ao mês para alcançar a sua liberdade financeira!'
                }
            }
        },
        tempoInvestido(){
            if (this.baseItems.rendaDesejada !== null && this.baseItems.taxaRetorno !== null && this.baseItems.investimentoMensal !== null && this.baseItems.investimentoAtual !== null) {
                var log1 = (((this.totalInvestido.numero - this.baseItems.investimentoAtual) / this.baseItems.investimentoMensal) * (this.baseItems.taxaRetorno/100)) + 1
                var log2 = 1 + (this.baseItems.taxaRetorno/100)
                var meses = Math.log(log1)/Math.log(log2)
                if (this.baseItems.investimentoAtual >= 20000000) {
                    return 'Você sabe que nem precisa fazer isso aqui...'
                }
                if(this.baseItems.investimentoAtual >= this.totalInvestido.numero){
                    return 'Parabéns! Você não precisa mais se preocupar com isso. Vai curtir a vida!'
                }
                else if (meses < 12) {
                    return 'Isso pode acontecer daqui a ' + parseInt(meses) + ' meses!'
                }else{
                    return 'Isso pode acontecer daqui a ' + parseInt(meses / 12) + ' anos!'
                }
            }
        },
        idadeLivre(){
            if(this.baseItems.rendaDesejada !== null && this.baseItems.taxaRetorno !== null && this.baseItems.investimentoMensal !== null && this.baseItems.investimentoAtual !== null && this.baseItems.idadeAtual !== null){
                if (this.tempoInvestido.includes('meses')) {
                    return 'Você estará com ' + this.baseItems.idadeAtual + ' anos.'
                }else{
                    var tempoSplit = this.tempoInvestido.split(' ')
                    var idade = parseInt(this.baseItems.idadeAtual) + parseInt(tempoSplit[5])
                    return 'Você estará com ' + idade + ' anos.'
                }
            }
        }
    },
    methods: {
        showExecs(){
            /*
            *   Integração realizada com a API da Airtable.
            *   O objetivo é armazenar e apresentar aos visitantes o
            *   número de vezes que o cálculo foi iniciado.
            *   Essa função é executada no lifecicle mounted() e apresenta
            *   o número inicial de cálculos realizados.
            */

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: this.$config.apiSecret}).base(this.$config.baseId);

            var self = this
            this.execs = null

            base('Visualizações').find('recF6OM3KoUxidGpH', function(err, record) {
                if (err) {
                    //console.error(err);
                    return
                }
                self.execs = record.fields.Quantidade
            })
        },
        showForm(){
            //  Mostra o próximo passo do formulário
            this.step = this.step + 1

            /*
            *   Integração realizada com a API da Airtable.
            *   Essa função é executada quando o botão "Começar" é clicado.
            *   Ela soma 1 execução ao total pré-existente na tabela.
            */

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: this.$config.apiSecret}).base(this.$config.baseId);

            var self = this
            this.execs = this.execs

            base('Visualizações').update([
                {
                    "id": this.$config.tableId,
                    "fields": {
                    "Quantidade": self.execs + 1
                    }
                }
                ], function(err, records) {
                if (err) {
                    //console.error(err);
                    return;
                }
                records.forEach(function(record) {
                    self.execs = record.get('Quantidade')
                })
            })
        },
        reiniciar(){
            //  Apaga todos os valores preenchidos no formulário

            this.step = 2

            this.$store.commit('inputs/updateRendaDesejada', null)
            this.$store.commit('inputs/updateInvestimentoMensal', null)
            this.$store.commit('inputs/updateTaxaRetorno', null)
            this.$store.commit('inputs/updateInvestimentoAtual', null)
            this.$store.commit('inputs/updateIdadeAtual', null)

            /*
            *   Integração realizada com a API da Airtable.
            *   Essa função é executada quando o botão "Recomeçar" é clicado.
            *   Ela soma 1 execução ao total pré-existente na tabela.
            */

            var Airtable = require('airtable');
            var base = new Airtable({apiKey: this.$config.apiSecret}).base(this.$config.baseId);

            var self = this
            this.execs = this.execs

            base('Visualizações').update([
                {
                    "id": this.$config.tableId,
                    "fields": {
                    "Quantidade": self.execs + 1
                    }
                }
                ], function(err, records) {
                if (err) {
                    //console.error(err);
                    return;
                }
                records.forEach(function(record) {
                    self.execs = record.get('Quantidade')
                })
            })
        }
    },
    mounted() {
        this.showExecs()
    }
}
</script>

<style>

</style>
