<script setup>
import { ref } from 'vue';

import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

const nameField = ref('');
const submitForm = () => {
    
}
</script>

<template>
    <h1 class="heading-1">Inputs</h1>
    <form @submit.prevent="submitForm">
        <Input 
            label="Your name"
            name="name"
            placeholder="Input your name"
            v-model:value="nameField"
        />

        <Button label="Submit" color="primary"></Button>
    </form>
</template>    