<template>
    <div class="w-full relative">
        <input 
        v-bind="$attrs"
        class="bg-neutral-700 py-3 px-6 rounded-md placeholder-neutral-400 w-full" 
        :value="modelValue" 
        @input="$emit('update:modelValue', $event.target.value)" @blur="$emit('blur')"
        :ref="$attrs.type"/>

        <span 
        @click="togglePassword"
        class="absolute top-3 right-2 cursor-pointer" v-if="$attrs.type === 'password'"
        >👁️</span>
        <span class="text-sm text-red-500" v-if="error"> {{  error }}</span>
    </div>
</template>

<script>
export default {
    inheritAttrs: false
};
</script>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    modelValue: String,
    error: String,
});

const password = ref(null);

function togglePassword(){
    password.value.getAttribute("type") === 'password' 
    ? password.value.setAttribute("type","text")
    : password.value.setAttribute("type","password")
}

const emit = defineEmits(['update:modelValue', 'blur']);



</script>

