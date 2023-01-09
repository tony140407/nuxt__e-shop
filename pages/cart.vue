<script setup>
const cart = ref([])
await useFetch('/api/cart').then(
    (res) => {
        console.log(res)
        const data = res.data.value
        const error = res.error.value
        if (error) {
            // dealing error
            console.error(error)
        } else {
            console.log(data.data.carts)
        }
    },
    (error) => {
        console.log('exception...')
        console.log(error)
    },
)

definePageMeta({
    title: 'Wardrobe | Cart',
    layout: 'recommend',
})
</script>
<template>
    <section class="mg:p-0 container mx-auto mt-10 px-5">
        <h3 class="border-b-2 border-lime-500 text-2xl font-extrabold text-lime-500">購物車</h3>
        <div class="h-100 w-100 flex items-center justify-center py-6">
            <FrontendCartEmpty v-if="cart.length == 0"></FrontendCartEmpty>
        </div>
    </section>
</template>
<!-- <style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.25s ease;
}
.fade-enter,
.fade-leave-to {
    transform: translateX(100%);
    opacity: 0;
}
</style> -->
