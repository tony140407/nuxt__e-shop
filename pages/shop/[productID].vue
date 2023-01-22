<script setup>
import { useProductsStore } from '~/store/products';
const route = useRoute();
const { productID } = route.params;

const { products } = useProductsStore();
const currentProduct = computed(() => {
  const product = products.find((product) => product.id === productID);
  if (product) {
    return product;
  }
  navigateTo('/error', {
    error: { statusCode: 404, message: 'Product not found' },
  });
});

const qty = ref(1);

definePageMeta({
  title: 'Wardrobe | Shop',
  layout: 'default',
});
</script>
<template>
  <main class="container mx-auto mb-8 flex flex-col gap-4 px-4 sm:flex-row">
    <div
      class="h-full min-h-[500px] w-full min-w-[300px] border border-lime-500 bg-cover bg-center bg-no-repeat shadow-sm"
      :style="{ 'background-image': `url(${currentProduct.imageUrl})` }"
    ></div>
    <div class="flex flex-col items-center justify-between gap-16 sm:px-10">
      <div>
        <h3 class="mb-2 text-xl font-extrabold text-lime-500">
          {{ currentProduct.title }}
        </h3>
        <p class="text-gray-500">
          {{ currentProduct.description }}
        </p>
        <div class="mt-8 flex flex-col gap-4 md:flex-row">
          <div class="relative flex basis-3/5 items-center md:basis-full">
            <input
              type="number"
              :value="qty"
              class="peer relative h-10 w-full rounded-md bg-gray-50 text-center outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg"
              min="1"
              disabled
            />
            <button
              id="minus"
              :disabled="qty == 1"
              :data-cartID="currentProduct.id"
              :data-productID="currentProduct.product_id"
              class="max-w-16 absolute left-0 h-10 w-1/6 rounded-l-md bg-lime-500 text-xs font-semibold text-white transition-all duration-200 ease-in-out hover:bg-lime-600 disabled:bg-gray-400"
            >
              -
            </button>
            <button
              id="plus"
              :data-cartID="currentProduct.id"
              :data-productID="currentProduct.product_id"
              class="max-w-16 absolute right-0 h-10 w-1/5 rounded-r-md bg-lime-500 text-xs font-semibold text-white transition-all duration-200 ease-in-out hover:bg-lime-600"
            >
              +
            </button>
          </div>
          <button
            class="w-full basis-2/5 rounded-xl bg-red-400 py-3 md:basis-full"
            @click="addCart()"
          >
            加入購物車
          </button>
        </div>
      </div>
      <div>
        <h3 class="mb-2 text-xl font-extrabold text-lime-500">商品購買須知</h3>
        <p class="text-gray-500">
          產品因拍攝關係顏色可能略有差異，實際以廠商出貨為主。
          商品情境照為示意用，僅商品主體不包含其他配件，請以規格內容物為主。
          Wardrobe
          盡可能確保所列商品備貨充足，但偶爾仍會有產品售罄的情況。如您所訂購的商品庫存不足，我們將盡快以電子郵件通知您。任何訂單變動均會在訂單總額與出貨訊息內更新。
        </p>
        <br />
        <h3 class="mb-2 text-xl font-extrabold text-lime-500">退換貨須知</h3>
        <p class="text-gray-500">
          依《消費者保護法》的規定，於全站購物皆享有商品到貨【七日猶豫期】（含例假日）之權益。若收到的商品有任何問題，可於猶豫期內申請退貨。
        </p>
      </div>
    </div>
  </main>
</template>
