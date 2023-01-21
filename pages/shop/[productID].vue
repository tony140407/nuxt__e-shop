<script setup>
import { useProductsStore } from '~/store/products'
const route = useRoute()
const { productID } = route.params

const { products } = useProductsStore()

const currentProduct = computed(() => products.find((product) => product.id === productID))
</script>
<template>
    {{ currentProduct }}
</template>
