<template>
    <section v-if="tempoInvestido && idadeLivre">
        <svg id="visual" viewBox="0 0 900 300" class="w-full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
            <path d="M0 149L129 134L257 74L386 82L514 113L643 67L771 55L900 146L900 301L771 301L643 301L514 301L386 301L257 301L129 301L0 301Z" fill="#0066ff"></path>
            <path d="M0 125L129 119L257 98L386 140L514 153L643 109L771 128L900 108L900 301L771 301L643 301L514 301L386 301L257 301L129 301L0 301Z" fill="#0052c5"></path>
            <path d="M0 154L129 167L257 147L386 197L514 138L643 176L771 201L900 188L900 301L771 301L643 301L514 301L386 301L257 301L129 301L0 301Z" fill="#003e8c"></path>
            <path d="M0 209L129 186L257 196L386 196L514 227L643 192L771 220L900 205L900 301L771 301L643 301L514 301L386 301L257 301L129 301L0 301Z" fill="#002955"></path>
            <path d="M0 256L129 248L257 259L386 242L514 233L643 255L771 272L900 271L900 301L771 301L643 301L514 301L386 301L257 301L129 301L0 301Z" fill="#000000"></path>
        </svg>
        <div class="px-g lg:px-20 w-full h-64 bg-black text-white text-xl lg:text-3xl flex flex-col items-center text-center justify-center gap-y-5 font-extrabold">
            <p>
                {{totalInvestido.conteudo}}
            </p>
            <p>
                {{tempoInvestido}}
            </p>
            <p>
                {{idadeLivre}}
            </p>
        </div>
        <svg id="visual" viewBox="0 0 900 300" class="w-full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
            <path d="M0 149L129 164L257 224L386 216L514 185L643 231L771 243L900 152L900 0L771 0L643 0L514 0L386 0L257 0L129 0L0 0Z" fill="#0066ff"></path>
            <path d="M0 173L129 179L257 200L386 158L514 145L643 189L771 170L900 190L900 0L771 0L643 0L514 0L386 0L257 0L129 0L0 0Z" fill="#0052c5"></path>
            <path d="M0 144L129 131L257 151L386 101L514 160L643 122L771 97L900 110L900 0L771 0L643 0L514 0L386 0L257 0L129 0L0 0Z" fill="#003e8c"></path>
            <path d="M0 89L129 112L257 102L386 102L514 71L643 106L771 78L900 93L900 0L771 0L643 0L514 0L386 0L257 0L129 0L0 0Z" fill="#002955"></path>
            <path d="M0 42L129 50L257 39L386 56L514 65L643 43L771 26L900 27L900 0L771 0L643 0L514 0L386 0L257 0L129 0L0 0Z" fill="#000000"></path>
        </svg>
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
        },
        totalInvestido: {
            required: true
        },
    }
}
</script>

<style>

</style>