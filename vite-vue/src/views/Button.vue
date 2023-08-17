<script setup>
import Button from '@/components/Button.vue';

const eventForButton = () => {
    console.log('gsergsergsergsergserg');
}
</script>

<template>
    <h1 class="heading-1">Button</h1>
    <h1 class="heading-1">Colors</h1>
    <div class="line">
        <Button label="Primary" color="primary" />
        <Button label="Second" color="second" />
        <Button label="Success" color="success" />
        <Button label="Info" color="info" />
        <Button label="Warning" color="warning" />
        <Button label="Danger" color="danger" />
    </div>
    <h1 class="heading-1">Rounded</h1>
    <div class="line">
        <Button label="Primary" color="primary" :rounded="true" :disabled="true" />
        <Button label="Second" color="second" :rounded="true" />
        <Button label="Success" color="success" :rounded="true" />
        <Button label="Info" color="info" :rounded="true" />
        <Button label="Warning" color="warning" :rounded="true" />
        <Button label="Danger" color="danger" :rounded="true" />
    </div> 
    <h1 class="heading-1">Icons</h1>
    <div class="line">
        <Button color="primary" icon="heart" />
        <Button color="second" icon="hand" />
        <Button color="success" icon="address-book" />
        <Button color="info" icon="credit-card" />
        <Button color="warning" icon="lemon" />
        <Button color="danger" icon="hourglass" @clickBtn="eventForButton" />
    </div>    
</template>

<style lang="scss" scoped>
.line {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
}
</style>