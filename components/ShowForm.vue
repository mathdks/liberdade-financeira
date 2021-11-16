<template>
    <section class="w-full flex flex-col items-center">
        <div 
            v-show="step === 1"
            class="w-full lg:w-1/2 flex flex-col items-center"
        >
            <p class="text-lg font-semibold lg:text-justify">
                De forma simples, descubra quanto dinheiro você precisa
                ter investido para não precisar trabalhar nunca mais.
            </p>
            <p class="lg:text-justify mt-5">
                Todos os cálculos realizados após o preenchimento do formulário
                são baseados em conceitos e fórmulas reais sobre juros compostos. <br>
                Esse cálculo pode ser realizado quantas vezes você desejar, de forma totalmente gratuita. <br>
                <strong>Nenhum dado preenchido no formulário será coletado.</strong>
            </p>
            <button 
                type="button"
                @click="$emit('showForm')"
                class=" my-5 bg-gradient-to-b from-blue-600 to-blue-400 px-14 py-4 font-black text-white uppercase text-xl rounded-3xl shadow-xl transform hover:translate-y-1 hover:shadow"
            >
                Começar
            </button>
            <p v-if="execs" class="text-center">
                Esse cálculo já foi realizado {{execs}} vezes!
            </p>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        execs: {
            required: true
        },
        step: {
            required: true
        }
    }
}
</script>

<style>

</style>