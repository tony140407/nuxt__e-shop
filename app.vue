<script setup>
import { useProductsStore } from '~/store/products'
const { persistUser } = useFirebaseAuth()
persistUser()

const { fetchProducts } = useProductsStore()
fetchProducts()
</script>

<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
