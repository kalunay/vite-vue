<script setup>
import { ref } from 'vue';
import Tabs from '@/components/Tabs.vue';

const tabs = [
    {name: 'About', label: 'About'},
    {name: 'Vue', label: 'Vue'},
    {name: 'React', label: 'React'},
];
const selectedTab = ref('Vue');
const changeTab = (tabName) => {
    selectedTab.value = tabName;
}
</script>

<template>
    <h1 class="heading-1">Tabs</h1>
    <Tabs
        :names="tabs"
        :selectedTab="selectedTab"
        @changeTab="changeTab"
    >
    <div v-if="selectedTab === 'About'">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
    <div v-if="selectedTab === 'Vue'">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi assumenda provident optio, voluptatibus</div>
    <div v-if="selectedTab === 'React'">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi assumenda provident optio, voluptatibus deleniti quisquam quasi veniam odio fuga</div>    
    </Tabs>
</template>