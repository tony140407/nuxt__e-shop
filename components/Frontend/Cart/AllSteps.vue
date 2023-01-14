<script setup>
import { useCartStore } from '~/store/cart'
const cartStore = useCartStore()
const currentCartStep = computed(() => {
    return cartStore.currentCartStep
})
</script>
<template>
    <slot name="content"> </slot>
    <div class="mt-8 flex w-full flex-row-reverse justify-between gap-8">
        <div class="w-full">
            <button
                class="w-full rounded-2xl bg-lime-200 py-5 text-xl font-semibold hover:shadow-md"
                v-show="currentCartStep < 3"
                @click="cartStore.setCurrentCartStep(currentCartStep + 1)"
            >
                下一步
            </button>
        </div>
        <div class="w-full">
            <button
                class="w-full rounded-2xl bg-gray-100 py-5 text-xl font-semibold hover:shadow-md"
                v-show="currentCartStep > 1"
                @click="cartStore.setCurrentCartStep(currentCartStep - 1)"
            >
                上一步
            </button>
        </div>
    </div>
</template>
