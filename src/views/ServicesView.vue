<template >
    <div>
        <h2 class="text-3xl">Choose your model:</h2>
        <div class="flex gap-4 flex-wrap py-8">
            <div @click="showPopup(car)" v-for="car in allCars" :key="car.id"
                class="text-center car cursor-pointer opacity-50 transition-all hover:opacity-100 hover:scale-110">
                <img :src="car.img_url" alt="#">
                <span> {{ car.model }} </span>
            </div>
        </div>

        <div v-if="modalStatus"
            class="w-full absolute top-0 left-0 h-screen z-20 bg-slate-500/60 overflow-hidden flex items-center justify-center modal-wrapper">
            <div class="rounded-4 bg-white p-5 relative">
                <button class="absolute right-0 top-0" @click="toModal">X</button>
                <h2>{{ theCar.model }}</h2>
                <img :src="theCar.img_url" alt="">
            </div>
        </div>

    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    data() {
        return {
            theCar: null,
        }
    },
    create() {
        window.addEventListener("click", (e) => {
            console.log(e);
        })
    },
    methods: {
        ...mapMutations([
            'toModal'
        ]),
        showPopup(car) {
            this.toModal();
            this.theCar = car;
        },

    },
    computed: {
        ...mapGetters([
            'allCars',
            'modalStatus'
        ])
    }
}
</script>
<style></style>