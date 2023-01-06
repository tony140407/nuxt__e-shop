<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// import { useProductsStore } from '~/store/products'
// const { products } = useProductsStore()
gsap.registerPlugin(ScrollTrigger)
const main = ref()
const leftSection = ref()
const rightSection = ref()
const ctx = ref()

onMounted(() => {
    ctx.value = gsap.context((self) => {
        const scrollPin = gsap.timeline({
            scrollTrigger: {
                trigger: main.value,
                scrub: true,
                pin: true,
            },
        })
        scrollPin.from(rightSection.value, {
            y: -rightSection.value.offsetHeight * 0.5,
        })
        scrollPin.to(
            leftSection.value,
            {
                y: -leftSection.value.offsetHeight * 0.5,
            },
            '<',
        )
    }, main.value) // <- Scope!
})

onUnmounted(() => {
    ctx.value.revert() // <- Easy Cleanup!
})
</script>
<template>
    <section class="ScrollProduct container mx-auto h-screen overflow-hidden relative" ref="main">
        <div class="grid grid-cols-2">
            <div class="ScrollProduct--left translate-y-20" ref="leftSection">
                <FrontendCard />
                <FrontendCard />
                <FrontendCard />
                <FrontendCard />
                <FrontendCard />
                <FrontendCard />
                <FrontendCard />
            </div>
            <div class="ScrollProduct--right -translate-y-1/4" ref="rightSection">
                <FrontendCard />
                <FrontendCard />
                <FrontendCard />
                <FrontendCard />
                <FrontendCard />
                <FrontendCard />
                <FrontendCard />
            </div>
        </div>

        <div
            class="bg-green-400 text-center w-4/5 h-1/3 aspect-video hover:aspect-square absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl"
        >
            <p
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-extrabold text-3xl"
            >
                超過50種商品等你訂購
            </p>
        </div>
    </section>
</template>
