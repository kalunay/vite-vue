<script setup>
import { ref } from 'vue';
import ProgressBar from '@/components/Progress/ProgressBar.vue';
import ProgressCircle from '@/components/Progress/ProgressCircle.vue';
import Button from '@/components/Button.vue'

const percentBar = ref(40);
const percentCircle = ref(60);
const addPercentBar = () => {
    percentBar.value += 10;
    if(percentBar.value > 100){
        percentBar.value = 100;
    }
}
</script>

<template>
    <h1 class="heading-1">Progress</h1>
    <progress-bar :percent="percentBar" color="success" />
    <Button label="Add" @click="addPercentBar" />
    <ProgressCircle :percent="percentCircle" color="warning" />
</template>