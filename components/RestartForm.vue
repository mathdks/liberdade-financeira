<template>
    <section>
        <div
            v-if="tempoInvestido && idadeLivre"
            class="flex flex-col items-center"
        >
            <p class="border-l-4 border-l-green-500 bg-green-200 px-4 py-2 font-semibold">
                Atenção: O seu resultado está apresentado logo abaixo.
            </p>
            <p class="mt-5 text-justify">
                Você pode alterar os valores quantas vezes quiser, que o cálculo será executado em tempo real.
            </p>
            <p class="mt-5">
                Caso deseje recomeçar o cálculo, clique no botão abaixo.
            </p>
            <button
                type="button"
                @click="$emit('restartForm')"
                class="mt-10 bg-gradient-to-b from-blue-600 to-blue-400 px-14 py-4 font-black text-white uppercase text-xl rounded-3xl shadow-xl transform hover:translate-y-1 hover:shadow"
            >
                Recomeçar
            </button>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        tempoInvestido: {
            required: true
        },
        idadeLivre: {
            required: true
        }
    }
}
</script>

<style>

</style>