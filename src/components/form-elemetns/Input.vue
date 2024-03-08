<script setup>
const props = defineProps(['defaultvalue', 'name', 'placeholder'])

</script>
<template>
    <label class="mb-4 block">
        <input type="text" :name="name" :value="defaultvalue" :placeholder="placeholder" class="w-full border px-2 py-3 focus:outline-none">
    </label>
</template>
