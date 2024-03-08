<script setup>
const props = defineProps(['modelValue', 'name', 'placeholder'])
</script>
<template>
    <label class="mb-4">
        <textarea :name="name" rows="5" :placeholder="placeholder"
            class="w-full border px-2 py-3 resize-none focus:outline-none"></textarea>
    </label>
</template>
