<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../stores/auth';
import axios from 'axios'
import axiosApiInstance from '../api'

import Loader from '../components/Loader.vue';
import Card from 'primevue/card';

const authStore = useAuthStore();

const cars = ref();
const showLoader = ref(false);

const getAllCars = async () => {
    showLoader.value = true
    try {
        const response = await axiosApiInstance.get(`https://jwt-vue-4297e-default-rtdb.europe-west1.firebasedatabase.app/Cars.json`);
        cars.value = response.data
    } catch (err) {
        console.log(err.response);
    } finally {
        showLoader.value = false
    }
}

onMounted(async() => {
    await getAllCars();
})
</script>

<template>
    <div>
        <h2>Cars</h2>
        <Loader v-if="showLoader" />
        <div class="flex flex-column gap-3" v-else>
            <Card v-for="(car, i) in cars" :key="i">
                <template #title>{{ car.name }}</template>
                <template #subtitle>{{ car.type }}</template>
            </Card>
        </div>
    </div>
</template>

<style scoped></style>