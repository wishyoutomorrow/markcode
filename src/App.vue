<script>
import HeaderVue from './components/HeaderVue.vue';
import SidebarVue from "./components/SidebarVue.vue";
import { mapGetters } from 'vuex';
export default {
    components: {
        HeaderVue,
        SidebarVue
    },

    computed: {
        ...mapGetters([
            'modalStatus'
        ])
    }
}
</script>

<template>
    <HeaderVue />
    <div class="flex gap-6 h-full w-full pt-[84px]" :class="{ 'modal-active': modalStatus }">
        <SidebarVue />
        <main class="h-full w-full pt-12 pr-4">
            <hr class="bg-black h-0.5">
            <router-view></router-view>
        </main>
    </div>
</template>

<style scoped></style>
