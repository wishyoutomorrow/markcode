<template lang="">
    <div class="flex h-full">
       <div class="flex flex-col items-center justify-center grow">
            <h1 class="text-3xl font-bold mb-24">Welcome Monica Ngau!</h1>
            <img src="../assets/images/car.png" alt="">
       </div>

    </div>
</template>
<script>
import MercedesLogo from '@/components/MercedesLogo.vue';
import ButtonVue from '@/components/ButtonVue.vue';
import { mapGetters } from 'vuex';
export default {
    components: {
        MercedesLogo,
        ButtonVue
    },
    computed: {
        ...mapGetters([
            'allCars',
            'allCarsModels',
            'allCarsYears'
        ]),
    }
}
</script>
<style lang="">
    
</style>