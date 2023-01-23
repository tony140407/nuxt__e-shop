<script setup>
import { useCartStore } from '~/store/cart';
const cartStore = useCartStore();
const currentCartStep = computed(() => {
  return cartStore.currentCartStep;
});

function nextStep() {
  if (currentCartStep.value == 2) {
    cartStore.sendOrder();
  } else {
    cartStore.setCurrentCartStep(currentCartStep.value + 1);
  }
}
</script>
<template>
  <slot name="content"> </slot>
  <div class="mt-8 flex w-full flex-row-reverse justify-between gap-8">
    <div class="w-full">
      <button
        class="w-full rounded-2xl bg-lime-200 py-5 text-xl font-semibold hover:shadow-md disabled:cursor-not-allowed disabled:bg-lime-50"
        v-show="currentCartStep == 1 || currentCartStep == 2"
        :disabled="
          currentCartStep == 2 &&
          (cartStore.userProfile.name == '' ||
            cartStore.userProfile.tel == '' ||
            cartStore.userProfile.address == '' ||
            cartStore.userProfile.email == '')
        "
        @click="nextStep"
      >
        下一步
      </button>
    </div>
    <div class="w-full">
      <button
        class="w-full rounded-2xl bg-gray-100 py-5 text-xl font-semibold hover:shadow-md"
        v-show="currentCartStep == 2"
        @click="cartStore.setCurrentCartStep(currentCartStep - 1)"
      >
        上一步
      </button>
    </div>
  </div>
</template>
