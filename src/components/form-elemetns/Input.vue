<script setup>
const props = defineProps(['modelValue', 'name', 'placeholder'])

</script>
<template>
    <label class="mb-4 block">
        <input type="text" :name="name" :placeholder="placeholder" v-model.trim="props.modelValue"
            class="w-full border px-2 py-3 focus:outline-none">
    </label>
</template>
