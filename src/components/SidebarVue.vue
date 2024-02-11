<template>
 <aside class="w-60 h-full block py-7 px-4">
    
    <router-link v-for="route in routes" :key="route.path" :to="route.path">
        <ButtonVue :title="route.name" class="block w-full py-2 text-xl mb-4"/>
      </router-link>

 </aside>
</template>
<script>
import ButtonVue from "../components/ButtonVue.vue"
export default {
    components: {
        ButtonVue
    },

    data() {
        return {
            routes: this.$router.options.routes
        };
    }
    
}
</script>
<style lang="">
    
</style>