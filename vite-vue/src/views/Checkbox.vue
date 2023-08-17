<script setup>
import { ref } from 'vue';
import Checkbox from '@/components/Checkbox/Checkbox.vue';
import CheckboxGroup from '@/components/Checkbox/CheckboxGroup.vue';

const checkboxActive = ref(true);
const checkboxDisabled = ref(true);
const checkboxDisabledChecked = ref(true);

const listOfHeroes = ref([
    {name: 'Spider Man', id: 'h1'},
    {name: 'Batman', id: 'h2'},
    {name: 'Tor', id: 'h3'},
    {name: 'Loki', id: 'h4'},
]);

const selectedHeros = ref([]);
</script>

<template>
    <h1 class="heading-1">Checkbox</h1>
    <div class="line">
        <checkbox 
            label="Checkbox Active"
            name="checkboaxActive"
            id="checkboaxActive"
            value="checkboaxActive"
            v-model:checked="checkboxActive"
        />
        <checkbox 
            label="Checkbox Disabled"
            name="checkboaxDisabled"
            id="checkboaxDisabled"
            value="checkboaxDisabled"
            :disabled="checkboxDisabled"
            v-model:checked="checkboxDisabledChecked"
        />
    </div>
    <h1 class="heading-1">Checkbox Gruops</h1>
    {{ selectedHeros }}
    <div class="line line_block">
        <checkbox-group v-model:value="selectedHeros" name="heros" :options="listOfHeroes"
        />
    </div>
</template>