<template>
    <div class=" bg-black/80 py-12 px-12 md:max-w-md mx-auto">
        <h1 class="text-3xl font-medium">Accedi</h1>
        <form class="mb-20" @submit.prevent="loginUser">
            <div class="flex flex-col gap-4 my-2">
                <BaseInput v-bind="email" placeholder="Email" type="email"/>
                <BaseInput v-bind="password" placeholder="Password" type="password"/>
            </div>
            <BaseButton class="w-full" :disabled="!meta. valid">Accedi</BaseButton>
            <div v-if="error" class="text-red-600 text-center mt-4 p-3"> {{ error }}</div>
        </form>
        
            <div class="text-neutral-400">
                Prima volta sul sito? 
                <RouterLink class="text-white underline" to="/sign-up">Registrati.</RouterLink>
                <p class="text-sm mt-3">
                    Questa pagina è protetta da Google reCAPTCHA per garantire che tu non sia un bot. Scopri di più. 
                </p>
            </div>
        
    </div>
</template>

<script setup>
import { useForm } from 'vee-validate'
import { useUserStore } from '../store/UserStore'
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';
import router from '../route';
import { ref } from 'vue';
import BaseInput from './BaseInput.vue'
import BaseButton from './BaseButton.vue'

const error = ref(false);

const userStore = useUserStore();

const schema = toTypedSchema(
  yup.object({
    email: yup.string().required().email(),
    password: yup.string().min(6).required(),
  })
);

const { values, meta, resetForm, defineComponentBinds } = useForm({
    validationSchema: schema,
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



async function loginUser(){
    try {
        error.value=false;
        await userStore.login({...values});
        router.push({name: "HomePage"});
    } catch (err) {
        error.value = err
    } finally{
        resetForm();
    }
}

/*minuto 50 lezione giorno 12*/
</script>

