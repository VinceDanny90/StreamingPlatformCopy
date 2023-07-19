<template>
    <div class="bg-black min-h-screen">
        <div class=" absolute top-0 bottom-0 right-0 left-0 hidden md:block">
        <img class="h-full w-full object-cover opacity-50" :src="bgImage"/>
        </div>  
        <div class=" relative z-10 text-white min-h-screen flex-col">
            <Navbar/>
        <slot> </slot>

        
        </div>
    </div>
</template>

<script setup>
import bgImage from '../assets/images/netflix.bg.jpg'
import Navbar from '../components/Navbar.vue';

</script>

