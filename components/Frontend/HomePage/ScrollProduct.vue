<template>
    <section class="scrollProduct container" ref="scrollProductRef">
        <div class="row justify-content-between g-0 d-none d-lg-flex">
            <div
                class="scrollProduct_cardList col-12 col-lg-5"
                :style="{ transform: `translateY(${rightListScroll}vh)` }"
            >
                <div class="" v-for="eachProduct in products.slice(0, 8)" :key="eachProduct">
                    <Card :productDetail="eachProduct" class="mb-4" />
                </div>
            </div>
            <div
                class="scrollProduct_cardList col-12 col-lg-5"
                :style="{ transform: `translateY(${leftListScroll}vh)` }"
            >
                <div class="" v-for="eachProduct in products.slice(-8)" :key="eachProduct">
                    <Card :productDetail="eachProduct" class="mb-4" />
                </div>
            </div>
        </div>

        <div class="scrollProduct_slogan">
            <div class="scrollProduct_slogan_content" data-aos="fade-down">
                超過50種商品等你訂購
            </div>
        </div>
    </section>
</template>

<script setup>
import { useProductsStore } from '~/store/products'
const { products } = useProductsStore()

// const emit = defineEmits(['scrollProductInstance', 'rightAndLeftPosition'])

// const scrollProductRef = ref()
// const rightListScroll = ref(-0)
// const leftListScroll = ref(-100)
// emit('rightAndLeftPosition', {
//     rightListScroll: rightListScroll,
//     leftListScroll: leftListScroll,
// })
// onMounted(() => {
//     emit('scrollProductInstance', scrollProductRef.value)
// })
</script>
