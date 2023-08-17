<script setup>
import { ref } from 'vue';
import Radiobutton from '@/components/Radiobutton.vue';

const footballClubs = ref([
  {name: 'CSKA Moscow', id: 'f1'},
  {name: 'Spartak Moscow', id: 'f2'},
  {name: 'Real Madrid', id: 'f3'},
  {name: 'Milan', id: 'f4'}
]);

const selectedClub = ref('');
const disabledRadio = ref(true);
const disabledRadioChecked = ref(true);
</script>

<template>
    <div class="line line_block">
        <div
        v-for="club in footballClubs"
        :key="club.id"
        >
            <radiobutton 
                :value="club.name"
                :label="club.name"
                :id="club.id"
                name="club"
                v-model:checkedValue="selectedClub"
            />
        </div>
    </div>
    <div class="line line_block">
        <radiobutton 
            value="RadioButton Disabled"
            label="RadioButton Disabled"
            id="RadioButtonDisabled"
            name="RadioButtonDisabled"
            :disabled="disabledRadio"
            v-model:checkedValue="disabledRadioChecked"
        />
    </div>
</template>