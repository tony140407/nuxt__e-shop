<script setup>
import { ref } from 'vue'
const emit = defineEmits(['sidebarSelect'])
const currentCategory = ref('全部')
function changeCategory(category) {
    currentCategory.value = category
    emit('sidebarSelect', currentCategory.value)
}
const props = defineProps({
    changeCategory: {
        type: Function,
        default: () => {
            console.log('default changeCategory')
        },
    },
    currentCategory: {
        type: String,
        default: '全部',
    },
})
</script>

<template>
    <section class="h-4/5 rounded-2xl bg-lime-100">
        <ul
            class="flex flex-wrap items-center justify-center gap-2 px-4 py-6 text-xl font-extrabold lg:flex-col lg:items-stretch lg:gap-4 lg:py-10"
        >
            <li class="flex justify-center">
                <button
                    class="mx-auto rounded-2xl border-2 border-transparent bg-white py-3 px-5 hover:border-lime-500 lg:w-4/5 lg:py-0 lg:px-0"
                    :class="{ 'bg-lime-300 text-white': props.currentCategory == '全部' }"
                    @click="props.changeCategory('全部')"
                >
                    全部
                </button>
            </li>
            <li class="flex justify-center">
                <button
                    class="mx-auto rounded-2xl border-2 border-transparent bg-white py-3 px-5 hover:border-lime-500 lg:w-4/5 lg:py-0 lg:px-0"
                    :class="{ 'bg-lime-300 text-white': props.currentCategory == '衣服' }"
                    @click="props.changeCategory('衣服')"
                >
                    衣服
                </button>
            </li>
            <li class="flex justify-center">
                <button
                    class="mx-auto rounded-2xl border-2 border-transparent bg-white py-3 px-5 hover:border-lime-500 lg:w-4/5 lg:py-0 lg:px-0"
                    :class="{ 'bg-lime-300 text-white': props.currentCategory == '褲子' }"
                    @click="props.changeCategory('褲子')"
                >
                    褲子
                </button>
            </li>
            <li class="flex justify-center">
                <button
                    class="mx-auto rounded-2xl border-2 border-transparent bg-white py-3 px-5 hover:border-lime-500 lg:w-4/5 lg:py-0 lg:px-0"
                    :class="{ 'bg-lime-300 text-white': props.currentCategory == '鞋子' }"
                    @click="props.changeCategory('鞋子')"
                >
                    鞋子
                </button>
            </li>
            <li class="flex justify-center">
                <button
                    class="mx-auto rounded-2xl border-2 border-transparent bg-white py-3 px-5 hover:border-lime-500 lg:w-4/5 lg:py-0 lg:px-0"
                    :class="{ 'bg-lime-300 text-white': props.currentCategory == '外套' }"
                    @click="props.changeCategory('外套')"
                >
                    外套
                </button>
            </li>
        </ul>
    </section>
</template>
