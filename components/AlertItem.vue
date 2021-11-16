<template>
    <p
        v-if="baseItems >= 5"
        class="border-l-4 border-l-red-500 bg-red-200 px-4 py-2 font-semibold lg:w-2/3 mt-1 mb-3"
    >
        Atenção: é altamente improvável obter esse rendimento mensal de forma garantida.
    </p>
</template>

<script>
export default {
    computed: {
        baseItems() {
            return this.$store.state.inputs.baseInputs.taxaRetorno
        }
    }
}
</script>

<style>

</style>