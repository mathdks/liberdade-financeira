<template>
    <span
        v-if="content.msgTooltip"
        class="material-icons-outlined text-lg cursor-pointer"
        v-tooltip="{
            content: content.msgTooltip,
            theme: 'calcfin'
        }"
    >
        help_outline
    </span>
</template>

<script>
export default {
    props: {
        content: {
            msgTooltip: String
        }
    }
}
</script>

<style>

</style>