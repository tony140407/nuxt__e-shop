<script setup>
import { useProductsStore } from '~/store/products'
const { filterCategory } = useProductsStore()
const currentCategory = ref('全部')
const changeCategory = ref((category) => {
    currentCategory.value = category
})

definePageMeta({
    title: 'Wardrobe | Shop',
    layout: 'default',
})
</script>
<template>
    <section class="container mx-auto relative">
        <div class="lg:flex gap-6 mx-4 :md:ms-auto mt-10">
            <FrontendShopSidebar
                class="basis-1/4"
                :changeCategory="changeCategory"
                :currentCategory="currentCategory"
            />
            <div class="basis-3/4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <transition-group name="fade">
                        <div
                            class="mx-auto mb-5 w-full"
                            v-for="eachProduct in filterCategory(currentCategory)"
                            :key="`${currentCategory}_${eachProduct.title}`"
                        >
                            <FrontendCard :productDetail="eachProduct" />
                        </div>
                    </transition-group>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.25s ease;
}
.fade-enter,
.fade-leave-to {
    transform: translateX(50%);
    opacity: 0;
}
</style>
