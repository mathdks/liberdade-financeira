<template>
    <div class="flex flex-col items-center justify-center">
        <div class="flex gap-x-2 items-center">
            <label
                class="font-bold text-lg border-b-4 border-b-blue-500"
                :for="content.for"
            >
                {{content.labelContent}}
            </label>
            <Tooltip :content="content"/>
        </div>
        <span class="text-base font-semibold">
            {{content.prefixo}}
            <input
            type="number"
            :id="content.for"
            :min="content.min"
            :max="content.max"
            :step="content.step"
            class="border focus:border-blue-300 focus:outline-none mt-2 mb-4"
            v-model="numberValue"
            />{{content.sufixo}}
        </span>
    </div>
</template>

<script>

export default {
    data(){
        return {
            content: {
                msgTooltip: 'Quanto o seu investimento irá render por mês.',
                labelContent: 'Taxa de rendimento mensal do investimento',
                for: 'taxaRetorno',
                min: 0,
                max: 10,
                step: 0.01,
                prefixo: null,
                sufixo: '%'
            }
        }
    },
    computed: {
        numberValue: {
            get() {
                return this.$store.state.inputs.baseInputs.taxaRetorno
            },
            set(value) {
                this.$store.commit('inputs/updateTaxaRetorno', value)
            }
        }
    }
}
</script>

<style>
.v-popper--theme-calcfin .v-popper__inner {
    background: #ffdd00;
    color: #000000;
}

.dark .v-popper--theme-calcfin .v-popper__inner {
    color: #000000;
}

.v-popper--theme-calcfin .v-popper__arrow {
    border-color: #ffdd00;
}
</style>