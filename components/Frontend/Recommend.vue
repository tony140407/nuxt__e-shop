<script setup>
import { useProductsStore } from '~/store/products'
import { Navigation } from 'swiper'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

const { products } = useProductsStore()

const breakpoints = {
    499: {
        slidesPerView: 1,
        spaceBetween: 50,
    },
    767: {
        slidesPerView: 2,
        spaceBetween: 50,
    },
    1200: {
        slidesPerView: 3,
        spaceBetween: 50,
    },
}
const renderProducts = ref(products.slice(0, 8) || [])
</script>
<template>
    <section class="mg:p-0 container mx-auto px-5">
        <h3
            class="mb-4 inline-block border-b-2 border-lime-500 text-2xl font-extrabold text-lime-500"
        >
            <font-awesome-icon :icon="['fas', 'medal']" /> 為您推薦
        </h3>
        <swiper
            v-if="renderProducts && renderProducts.length > 0"
            :breakpoints="breakpoints"
            navigation
            class="py-5"
        >
            <swiper-slide v-for="eachProduct in renderProducts" :key="eachProduct">
                <FrontendCard :productDetail="eachProduct" />
            </swiper-slide>
        </swiper>
    </section>
</template>
