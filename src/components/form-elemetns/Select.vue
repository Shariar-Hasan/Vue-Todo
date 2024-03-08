<script setup>
const props = defineProps(["datalist", "defaultValue", "name"])
console.log(props.datalist)
</script>
<template>
    <label class="mb-4 block">
        <select :name="name" class="w-full border px-2 py-3 focus:outline-none">
            <option v-for="({ title, id, value, style }) in datalist" :value="value" :key="id" :class="[
            style ? style : ''
        ]">{{ title }}</option>
        </select>
    </label>
</template>