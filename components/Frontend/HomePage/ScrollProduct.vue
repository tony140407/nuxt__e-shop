<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useProductsStore } from '~/store/products';
const { products } = useProductsStore();

gsap.registerPlugin(ScrollTrigger);
const main = ref();
const leftSection = ref();
const rightSection = ref();
const ctx = ref();

onMounted(() => {
  ctx.value = gsap.context((self) => {
    const scrollPin = gsap.timeline({
      scrollTrigger: {
        trigger: main.value,
        scrub: true,
        pin: true,
      },
    });
    scrollPin.from(rightSection.value, {
      y: -rightSection.value.offsetHeight * 0.5,
    });
    scrollPin.to(
      leftSection.value,
      {
        y: -leftSection.value.offsetHeight * 0.5,
      },
      '<'
    );
  }, main.value); // <- Scope!
});

onUnmounted(() => {
  ctx.value.revert(); // <- Easy Cleanup!
});
</script>
<template>
  <section
    class="container relative mx-auto h-screen max-h-[1080px] overflow-hidden py-5"
    ref="main"
  >
    <div class="grid-cols-2 gap-8 sm:grid">
      <div
        class="flex -translate-y-[15%] flex-col items-center gap-8"
        ref="leftSection"
      >
        <FrontendCard
          v-for="eachProductDetail in products.slice(0, 10)"
          :key="eachProductDetail"
          :productDetail="eachProductDetail"
        />
      </div>
      <div
        class="flex -translate-y-1/4 flex-col items-center gap-8"
        ref="rightSection"
      >
        <FrontendCard
          v-for="eachProductDetail in products.slice(-10)"
          :key="eachProductDetail"
          :productDetail="eachProductDetail"
        />
      </div>
    </div>

    <div
      class="scrollProduct_slogan absolute top-1/2 left-1/2 min-h-[100px] w-3/5 -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-lime-500 py-20 text-center after:border-t-lime-300"
    >
      <p
        class="absolute top-1/2 left-1/2 w-4/5 -translate-x-1/2 -translate-y-1/2 transform text-4xl font-extrabold text-white"
      >
        ??????50?????????????????????
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.scrollProduct_slogan::after {
  content: '';
  position: absolute;
  bottom: 1px;
  left: 50%;
  width: 0;
  height: 0;
  border: 31px solid transparent;
  border-top-color: rgb(132 204 22);
  border-bottom: 0;
  border-left: 0;
  margin-left: -15.5px;
  margin-bottom: -31px;
}
</style>
