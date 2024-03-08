<script setup>
const props = defineProps(["text", "onclick", "type"])
</script>
<template>
    <button :type="type" class="px-4 py-2 bg-brand text-white rounded-sm active:scale-[0.99]">
        {{ text }}
    </button>
</template>