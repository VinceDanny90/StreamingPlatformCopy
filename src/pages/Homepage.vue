<template>
    <TheHero :data="TvSeriesStore.hero" ></TheHero>
    <section class="text-white my-12 px-12">
        <h2 class="text-2xl font-medium">Nuove Uscite</h2>
        <div class="colums-2 md:columns-3">
            <div v-for="serie in TvSeriesStore.popular">
                <BaseCard :info="serie"/>
            </div>

        </div>

    </section>
</template>

<script setup>
import TheHero from '../components/TheHero.vue';
import BaseCard from '../components/BaseCard.vue';
import { useTvSeriesStore } from '../store/TvSeriesStore'
import { onMounted } from 'vue';

const TvSeriesStore = useTvSeriesStore();

onMounted(async() => {
    await TvSeriesStore.getPopular();
})

</script>

