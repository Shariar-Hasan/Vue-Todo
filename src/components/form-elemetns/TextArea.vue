<script setup>
const props = defineProps(['defaultvalue', 'name', 'placeholder'])
</script>
<template>
    <label class="mb-4">
        <textarea :name="name" rows="5" :placeholder="placeholder" :value="defaultvalue"
            class="w-full border px-2 py-3 resize-none focus:outline-none overflow-hidden"></textarea>
    </label>
</template>
