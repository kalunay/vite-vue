<script setup>
import Button from '@/components/Button.vue'
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
        <Button label="Primary" color="primary" :rounded="true" disabled />
        <Button label="Second" color="second" :rounded="true" />
        <Button label="Success" color="success" :rounded="true" />
        <Button label="Info" color="info" :rounded="true" />
        <Button label="Warning" color="warning" :rounded="true" />
        <Button label="Danger" color="danger" :rounded="true" />
    </div>    
</template>

<style lang="scss" scoped>
.line {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
}
</style>