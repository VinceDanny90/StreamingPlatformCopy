<template>
    <div class=" bg-black/80 py-12 px-12 md:max-w-md mx-auto">
        <h1 class="text-3xl font-medium">Registrati</h1>
        <form class="mb-20" @submit.prevent="createUser()">
            <div class="flex flex-col gap-4 my-2">
                <BaseInput v-bind="name" placeholder="Nome" type="text"/>
                
                <BaseInput v-bind="email" placeholder="Email" 
                type="email"/>
                
                <BaseInput v-bind="password" placeholder="Password" type="password"/>
                
            </div>
            <BaseButton class="w-full" :disabled="!meta.valid">Registrati</BaseButton>
            <div v-if="error" class="text-red-600 text-center mt-4 p-3"> {{ error }}</div>
        </form>
            <div class="text-neutral-400">
                Hai già un account? 
                <RouterLink class="text-white underline" :to="{name: 'LoginPage'}"> Accedi. </RouterLink>
                
                <p class="text-sm mt-2">
                    Questa pagina è protetta da Google reCAPTCHA per garantire che tu non sia un bot. Scopri di più. 
                </p>
            </div>
        
    </div>
</template>

<script setup>
import { useForm } from 'vee-validate'
import BaseInput from './BaseInput.vue'
import BaseButton from './BaseButton.vue'
import { useUserStore } from '../store/UserStore'
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';
import router from '../route';
import { ref } from 'vue';

const userStore = useUserStore();
const error = ref(false);

const schema = toTypedSchema(
  yup.object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().min(6).required(),
  })
);

const { values, resetForm, meta, defineComponentBinds } = useForm({
    validationSchema: schema,
});
const name = defineComponentBinds('name',{
    validateOnValueUpdate: false,
    mapProps: (state) => ({
        error: state.errors[0],
    })
});
const email = defineComponentBinds('email',{
    validateOnValueUpdate: false,
    mapProps: (state) => ({
        error: state.errors[0],
    })
});
const password = defineComponentBinds('password',{
    validateOnValueUpdate: false,
    mapProps: (state) => ({
        error: state.errors[0],
    })
});

async function createUser(){
    try {
        await userStore.addUser({ ...values })
        router.push({name: "HomePage"})
    } catch (err) {
        throw error.value=err;
    }finally{
        resetForm();
    }
   
   
}


</script>

