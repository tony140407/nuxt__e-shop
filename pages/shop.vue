<script setup>
import { useProductsStore } from '~/store/products'
const { filterCategory } = useProductsStore()
const currentCategory = ref('鞋子')
const changeCategory = ref((category) => {
    currentCategory.value = category
})

definePageMeta({
    title: 'Wardrobe | Shop',
    layout: 'default',
})
</script>
<template>
    <section class="container mx-auto">
        <div class="lg:flex">
            <FrontendShopSidebar
                class="basis-1/4"
                :changeCategory="changeCategory"
                :currentCategory="currentCategory"
            />
            <div class="basis-3/4">
                <div class="grid grid-cols-2">
                    <div
                        class=""
                        v-for="eachProduct in filterCategory(currentCategory)"
                        :key="eachProduct"
                    >
                        <FrontendCard :productDetail="eachProduct" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
