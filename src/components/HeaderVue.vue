<template>
    <header class="bg-black p-5 fixed z-10 w-full">
        <router-link to="/" class="flex">
            <MercedesLogo />
            <h1 class="text-white text-4xl ml-3">Mercedes-Benz Financial Services</h1>
        </router-link>
    </header>
</template>
<script>
import MercedesLogo from './MercedesLogo.vue';
export default {
    components: {
        MercedesLogo
    }
}
</script>
<style scoped></style>