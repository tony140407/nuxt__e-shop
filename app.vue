<script setup>
import { useProductsStore } from '~/store/products'
const { setProducts } = useProductsStore()
await useFetch('/api/products').then(
    (res) => {
        console.log(res)
        const data = res.data.value
        const error = res.error.value
        if (error) {
            // dealing error
            console.error(error)
        } else {
            setProducts(data.products)
        }
    },
    (error) => {
        console.log('exception...')
        console.log(error)
    },
)

const { persistUser } = useFirebaseAuth()
persistUser()
</script>

<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
