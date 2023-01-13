<script setup>
import { useCartStore } from '~/store/cart'
const cartStore = useCartStore()
const todoList = ref(['確認資料', '付款與運送方式', '完成訂購'])
const currentCartStep = computed(() => {
    return cartStore.currentCartStep
})
</script>
<template>
    <div v-if="currentCartStep !== 0" class="relative h-10 w-full rounded-full bg-lime-50">
        <div
            class="h-10 rounded-full bg-lime-200 transition-all duration-500 ease-in-out"
            :style="{ width: `${(currentCartStep / todoList.length) * 100}%` }"
        ></div>
        <div class="absolute top-0 left-0 flex h-full w-full items-center justify-around px-3">
            <div
                class="inline-block h-6 rounded-full bg-lime-50 px-2 text-sm font-extrabold text-lime-500 sm:text-base"
                :class="{
                    'opacity-50': index + 1 > currentCartStep,
                }"
                v-for="(todo, index) in todoList"
                :key="todo"
            >
                {{ index + 1 }}. {{ todo }}
            </div>
            <!-- 確認資料 -->
        </div>
    </div>
</template>
