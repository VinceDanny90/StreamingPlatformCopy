<template>
    <div class="bg-slate-100 aspect-video flex items-center text-white" :style="`background-image: url('https://image.tmdb.org/t/p/original${data?.backdrop_path}')`">
      <div class="px-4 md:w-[400px]">
        <h1 class="text-5xl font-bold mb-4">{{ data?.original_title }}{{ data?.name }}</h1>
  
        <div class="flex gap-x-2">
          <BaseButton class="flex items-center bg-white text-black">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ltr-0 e1mhci4z1" data-name="Play" aria-hidden="true">
              <path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor"></path>
            </svg>
            <span class="ml-2">Riproduci</span>
          </BaseButton>
  
          <BaseButton class="flex items-center bg-zinc-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ltr-0 e1mhci4z1" data-name="CircleI" aria-hidden="true">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path>
            </svg>
            <span class="ml-2">Altre Info</span>
          </BaseButton>
        </div>
      </div>
    </div>
  </template>
  
  

<script setup>
/*1.38*/
import BaseButton from './BaseButton.vue'

defineProps({
    data: Object,
})
</script>

