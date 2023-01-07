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
    <section class="bg-fuchsia-100 h-100">
        <ul class="flex flex-col items-stretch gap-5">
            <li class="flex justify-center">
                <button
                    class="mx-auto w-4/5 rounded-2xl border-2 border-transparent py-4 hover:border-green-300"
                    :class="{ 'sidebar_btn--active': currentCategory == '全部' }"
                    @click="props.changeCategory('全部')"
                >
                    全部
                </button>
            </li>
            <li class="flex justify-center">
                <button
                    class="w-4/5 rounded-2xl border-2 border-transparent py-2 hover:border-green-300"
                    :class="{ 'sidebar_btn--active': currentCategory == '衣服' }"
                    @click="props.changeCategory('衣服')"
                >
                    衣服
                </button>
            </li>
            <li class="flex justify-center">
                <button
                    class="w-4/5 rounded-2xl border-2 border-transparent py-2 hover:border-green-300"
                    :class="{ 'sidebar_btn--active': currentCategory == '褲子' }"
                    @click="props.changeCategory('褲子')"
                >
                    褲子
                </button>
            </li>
            <li class="flex justify-center">
                <button
                    class="w-4/5 rounded-2xl border-2 border-transparent py-2 hover:border-green-300"
                    :class="{ 'sidebar_btn--active': currentCategory == '鞋子' }"
                    @click="props.changeCategory('鞋子')"
                >
                    鞋子
                </button>
            </li>
            <li class="flex justify-center">
                <button
                    class="w-4/5 rounded-2xl border-2 border-transparent py-2 hover:border-green-300"
                    :class="{ 'sidebar_btn--active': currentCategory == '外套' }"
                    @click="props.changeCategory('外套')"
                >
                    外套
                </button>
            </li>
        </ul>
    </section>
</template>
