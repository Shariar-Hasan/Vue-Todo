<script setup>
import { ref } from "vue";
import InputBox from "./components/box/InputBox.vue";
const isModalOpen = ref(true)

const setIsModalOpen = (val) => {
  isModalOpen.value = val
}

</script>

<template>
  <InputBox :isModalOpen="isModalOpen" :setIsModalOpen="setIsModalOpen"/>
</template>
