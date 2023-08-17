<script setup>
import Checkbox from '@/components/Checkbox/Checkbox.vue';
const emits = defineEmits(['update:value'])

const props = defineProps({
    options: {
        type: Array,
        require: true,
        validator: (value) => {
            const hasNameKey = value.every((option) => Object.keys(option).includes('name'));
            const hasIdKey = value.every((option) => Object.keys(option).includes('id'));
            return hasNameKey && hasIdKey;
        }
    },
    name: {
        type: String,
        require: true
    },
    value: {
        type: Array,
        require: true
    }
});
const check = (params) => {
    let updateValue = [...props.value];
    if(params.checked) {
        updateValue.push(params.optionId);
    } else {
        updateValue.splice(updateValue.indexOf(params.optionId), 1);
    }
    emits('update:value', updateValue);
}
</script>

<template>
    <div v-for="option in options" :key="option.id">
        <checkbox
            :label="option.name"
            :id="option.id"
            :name="name"
            :value="option.name"
            :checked="value.includes(option.id)"
            group
            @updateCheckboxGroup="check"
        />
    </div>
</template>