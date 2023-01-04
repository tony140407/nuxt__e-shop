<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const main = ref()
const ctx = ref()

onMounted(() => {
    ctx.value = gsap.context((self) => {
        const introSection = self.selector('.intro_section')
        introSection.forEach((eachSection, index) => {
            gsap.from(eachSection, {
                x: index / 2 == 0 ? -200 : 200,
                opacity: 0,
                scrollTrigger: {
                    trigger: eachSection,
                    start: 'top 60%',
                    end: 'top 5%',
                    scrub: true,
                    markers: true,
                },
            })
        })
    }, main.value) // <- Scope!
})

onUnmounted(() => {
    ctx.value.revert() // <- Easy Cleanup!
})
</script>
<template>
    <section class="intro" ref="main">
        <div class="container my-5">
            <div class="intro_section grid grid-cols-1 md:grid-cols-2">
                <div class="intro_img intro_img_aboutUs"></div>
                <div class="intro_text">
                    <h3 class="intro_text_title">關於 Wardrobe</h3>
                    <p class="intro_text_content">
                        Wardrobe 是家在 2021 年新創立的網路服飾平台，
                        致力於提供消費者平價且高品質的衣服，讓您買的開心、穿的舒適。
                    </p>
                </div>
            </div>

            <div class="intro_section grid grid-cols-1 md:grid-cols-2">
                <div class="md:order-2 intro_img intro_img_aboutProducts"></div>
                <div class="md:order-md-1 intro_text">
                    <h3 class="intro_text_title order-last">關於包裹</h3>
                    <p class="intro_text_content">
                        面對一個不斷加快節奏的社會， Wardrobe 相信 24
                        小時內到貨必定會成為未來市場的新標準，故提供全台 24 小時到貨服務。
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.intro {
    &_img {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        // @include RWD_lg {
        //     min-height: 300px;
        // }
        &_aboutUs {
            background-image: url('@/assets/images/aboutUs.jpg');
            min-height: 300px;
        }
        &_aboutProducts {
            background-image: url('@/assets/images/aboutProduct.jpg');
            min-height: 300px;
        }
    }
    &_text {
        padding: 50px 30px;
        &_title {
            // color: $secondary;
            // border-bottom: 2px solid $secondary;
            font-weight: 700;
        }
        &_content {
            padding: 50px 50px;
            text-align: center;
            font-size: 1.5rem;
        }
    }
}
</style>
