<script setup>
import { ref } from "vue"
import Input from "../form-elemetns/Input.vue";
import TextArea from "../form-elemetns/TextArea.vue";
import SiteButton from "./../small-ui/SiteButton.vue";
import { extractDatafromFORM } from "../../lib/formdatas";
import Select from "../form-elemetns/Select.vue";

const props = defineProps(["isModalOpen", "setIsModalOpen"])
const isDescription = ref(false)
console.log({ first: props.isModalOpen, second: props.setIsModalOpen })

const toggleIsdesCription = () => {
    isDescription.value = !isDescription.value
}
const handleSubmit = (e) => {
    let data = extractDatafromFORM(e.target)
    data.description = isDescription.value ? data.description : ""
    todoList.value.push({ id: todoList.length, ...data })

    console.log({ data, todoList })
}

const datalist = [
    {
        id: 1,
        title: "High Priority",
        value: "high",
        style: "text-red-600"
    },
    {
        id: 2,
        title: "Medium Priority",
        value: "medium",
        style: "text-yellow-600"
    },
    {
        id: 3,
        title: "Low Priority",
        value: "low",
        style: "text-green-600"
    }
]
const todoList = ref([])
</script>

<template>
    <div class="fixed w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-60 duration-200 flex-col"
        :class="[
            isModalOpen ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-6'
        ]">
        <div class="px-5 py-3 max-w-xl w-full bg-gray-100 rounded">
            <div class="flex items-center justify-center relative">
                <span>
                    <img class="max-w-[100px]" src="./../../assets/logo.png" alt="">
                </span>
                <button class="absolute top-2 right-2 px-2 py-1 bg-brand/20 rounded-sm"
                    @click="() => setIsModalOpen(false)">
                    close
                </button>
            </div>
            <form @submit.prevent="handleSubmit">
                <Input defaultvalue="" placeholder="Write Todo title" name="title" />
                <p @click="toggleIsdesCription" class="text-gray-500 cursor-pointer mb-2">
                    <span v-if="!isDescription" class="text-green-600"> ➕ Add Description</span>
                    <span v-else class="text-red-600">❌ Remove Description</span>
                </p>
                <TextArea :class="[isDescription ? 'block' : 'hidden']" name="description" defaultvalue=""
                    placeholder="Write description . . . "></TextArea>
                <Select name="priority" :datalist="datalist"></Select>
                <SiteButton text="Save Todo" type="submit" onclick="handleSubmit" />
            </form>
        </div>
        <div class="max-w-xl w-full rounded mt-3">
            <div v-for="({ title, description, priority, id }) in todoList" :key="id" :title="priority" class="border-2 mb-1 px-4 py-2 bg-gray-200"
                :class="[
            priority === 'high' ? 'border-red-600' : priority === 'medium' ? 'border-yellow-600' : priority === 'low' ? 'border-green-600' : ''
        ]">
                <h5 class="text-gray-800 text-sm">{{ title }}</h5>
                <p class="text-gray-500 text-xs">{{ description }}</p>
            </div>
        </div>
    </div>
</template>