<template>
  <nav class="flex justify-between items-center bg-black/80 h-20 py-3 px-3 p-1">
    <div class="flex items-center space-x-2">

      <div class="md:inline-flex space-x-2 text-xl">
        <router-link to="/browse" class="text-white">Home</router-link>
        <router-link to="/film" class="text-white">Film</router-link>
        <router-link to="/serieTV" class="text-white">Serie TV</router-link>
      </div>
    </div>

    <div class="relative right-8">
      <button @click="toggleDropdown" class="flex items-center space-x-1  text-white">
        <img class="profile-icon" src="https://occ-0-13-2581.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRFZFS8db1R43jhQH8qYonvQ7XOdqfn1JEgczxD7Uz5vCGx-vnN18_sI8xORbinwQJzWgucNziIuHH8mhFA1iR7CGB8A4ms.png?r=eea" alt="">
        <span :class="{'rotate-180': isDropdownOpen}">&#9660;</span>
      </button>

      <div v-if="isDropdownOpen" class="md:inline-flex md:flex-col absolute mt-2 py-2 bg-black opacity-80 text-white rounded right-2 w-48 space-y-2">
        <div class="flex items-center ml-2">
          <img class="profile-icon" src="https://occ-0-13-2581.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRFZFS8db1R43jhQH8qYonvQ7XOdqfn1JEgczxD7Uz5vCGx-vnN18_sI8xORbinwQJzWgucNziIuHH8mhFA1iR7CGB8A4ms.png?r=eea" alt="">
          <span class="ml-2 text-white">Profilo 1</span>
        </div>
        <div class="flex items-center ml-2">
          <img class="my-2" src="https://occ-0-13-2581.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTACKVCVgthvD-eh6ri8ySnqcc7W0t6hyFMiFPrJHXj7MQT6DAYiDE1hfngLDRl2_usDVGGh-vrclPzuYkUYgRBdx3p6anU.png?r=93c" alt="">
          <span class="ml-2 text-white">Profilo 2</span>
        </div>
        <div class="flex items-center ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
          </svg>
          <span class="ml-2 text-white">Gestisci i profili</span>
        </div>
        <div class="flex items-center ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
          </svg>
          <span class="ml-2 text-white">Account</span>
        </div>
        <div class="flex items-center ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
          </svg>
          <span class="ml-2 text-white">Centro Assistenza</span>
        </div>
        <div class="flex text-center mt-2 ml-2 border-t">
          <button class="flex text-center mt-2 ml-2" @click="logout()">Logout</button>
        </div>
      </div>
    </div>
  </nav>
</template>

  
  
  <script setup>
  import { ref} from 'vue';
  import { useUserStore } from '../store/UserStore'
  
  const isDropdownOpen = ref(false);
  const userStore = useUserStore();
  
  const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
  };
  
  function logout(){
    userStore.logout();
  }

  </script>
  
  <style>
  .rotate-180 {
    transform: rotate(180deg);
  }
  </style>
  