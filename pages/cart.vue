<script setup>
import { useCartStore } from '~/store/cart';
const cartStore = useCartStore();
const cart = computed(() => cartStore.cart);
const currentCartStep = computed(() => cartStore.currentCartStep);

cartStore.getCart();

definePageMeta({
  title: 'Wardrobe | Cart',
  layout: 'recommend',
});
</script>
<template>
  <section class="mg:p-0 container mx-auto my-10 px-5">
    <FrontendCartStepBar class="mb-5"></FrontendCartStepBar>
    <h3
      class="border-b-2 border-lime-500 text-2xl font-extrabold text-lime-500"
    >
      購物車
    </h3>
    <div class="h-100 w-100 flex flex-col items-center justify-center py-6">
      <FrontendCartAllSteps v-if="cart.length > 0">
        <template #content>
          <FrontendCartSelectedProduct
            v-if="currentCartStep === 1"
            :cart="cart"
          />
          <FrontendCartUserProfile
            v-else-if="currentCartStep === 2"
          ></FrontendCartUserProfile>
          <FrontendCartSuccess v-else></FrontendCartSuccess>
        </template>
      </FrontendCartAllSteps>

      <FrontendCartEmpty v-else></FrontendCartEmpty>
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
