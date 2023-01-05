<script setup></script>
<template>
    <section class="scrollProduct container" ref="scrollProductRef">
        <div class="row justify-content-between g-0 d-none d-lg-flex">
            <div
                class="scrollProduct_cardList col-12 col-lg-5"
                :style="{ transform: `translateY(${rightListScroll}vh)` }"
            >
                <div
                    class=""
                    v-for="eachProduct in storeData.products.slice(0, 8)"
                    :key="eachProduct"
                >
                    <Card :productDetail="eachProduct" class="mb-4" />
                </div>
            </div>
            <div
                class="scrollProduct_cardList col-12 col-lg-5"
                :style="{ transform: `translateY(${leftListScroll}vh)` }"
            >
                <div
                    class=""
                    v-for="eachProduct in storeData.products.slice(-8)"
                    :key="eachProduct"
                >
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
import Card from '@/components/frontend/card.vue'
import { storeData } from '@/js/storeData.js'
import { ref, onMounted } from 'vue'

const { data } = await useFetch('/api/products')
const { products } = data.value

const emit = defineEmits(['scrollProductInstance', 'rightAndLeftPosition'])

const scrollProductRef = ref()
const rightListScroll = ref(-0)
const leftListScroll = ref(-100)
emit('rightAndLeftPosition', {
    rightListScroll: rightListScroll,
    leftListScroll: leftListScroll,
})
onMounted(() => {
    emit('scrollProductInstance', scrollProductRef.value)
})
</script>
