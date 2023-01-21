<script setup>
import { useProductsStore } from '~/store/products'
const route = useRoute()
const { productID } = route.params

const { products } = useProductsStore()

const currentProduct = computed(() => {
    const product = products.find((product) => product.id === productID)
    if (product) {
        return product
    }
    navigateTo('/error', { error: { statusCode: 404, message: 'Product not found' } })
})
definePageMeta({
    title: 'Wardrobe | Shop',
    layout: 'default',
})
</script>
<template>
    {{ currentProduct }}
</template>
