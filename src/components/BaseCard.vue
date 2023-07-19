<template>
    <div class="rounded-md overflow-hidden hover:scale-125 transition-all">
        <img :src="`https://image.tmdb.org/t/p/original/${info.backdrop_path}`"
        class="rounded-md"/>
        <div class="bg-neutral-900 shadow-3xl shadow-neutral-600">
        <div class="flex gap-x-1">
            {{ info.original_title }}{{ info.original_name }}
            <svg 
           width="24" 
           height="24" 
           viewBox="0 0 24 24" 
           fill="none" 
           xmlns="http://www.w3.org/2000/svg" class="ltr-0 e1mhci4z1" 
           data-name="Play" 
           aria-hidden="true">
           <path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor"></path>
            </svg>
            <svg 
            xmlns="http://www.w3.org/2000/svg" fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" stroke="currentColor" 
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" stroke="currentColor" 
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>


            
            <svg width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" xmlns="http://www.w3.org/2000/svg" 
            class="ltr-0 e1mhci4z1" data-name="CircleI" 
            aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path>
                </svg>
                
            </div>             
        </div>
        

    </div>
</template>

<script setup>
defineProps({
    info: Object,
})
</script>

