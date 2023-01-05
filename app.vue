<script setup>
import { useProductsStore } from '~/store/products'
const { setProducts } = useProductsStore()
const { data } = await useFetch('http://localhost:3166/api/products')
setProducts(data.value.products)
</script>

<template>
    <NuxtPage />
</template>
