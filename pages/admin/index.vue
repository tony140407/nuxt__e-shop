<script setup>
import { useProductsStore } from '~/store/products';
const { $dayjs } = useNuxtApp();

const productsStore = useProductsStore();
// productsStore.fetchProducts();
const allProducts = computed(() => {
  return productsStore.products;
});

definePageMeta({
  middleware: 'check-login',
  layout: 'admin',
});
</script>
<template>
  <div class="container my-10 mx-auto px-5">
    <h1
      class="mb-5 border-b-2 border-lime-500 text-2xl font-extrabold text-lime-500"
    >
      產品管理頁面
    </h1>

    <div class="relative overflow-x-auto rounded-xl border border-gray-700">
      <table class="w-full text-left text-sm text-gray-500">
        <thead class="bg-gray-700 text-xs uppercase text-white">
          <tr>
            <th scope="col" class="px-6 py-3">產品名稱</th>
            <th scope="col" class="px-6 py-3">販售金額</th>
            <th scope="col" class="px-6 py-3">是否上架</th>
            <th scope="col" class="px-6 py-3">修改內容</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-b bg-white"
            v-for="eachProduct in allProducts"
            :key="eachProduct.id"
          >
            <th
              scope="row"
              class="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
            >
              {{ eachProduct.title }}
            </th>
            <td class="px-6 py-4">
              <span
                v-if="eachProduct.origin_price !== eachProduct.price"
                class="mr-2 text-red-500 line-through"
                >${{ eachProduct.origin_price }}</span
              >
              <span>${{ eachProduct.price }}</span>
            </td>
            <td class="px-6 py-4">
              {{ eachProduct.is_enabled ? '上架中' : '已下架' }}
            </td>
            <td class="space-x-1 px-6 py-4">
              <button
                class="rounded-xl border border-lime-500 px-2 py-1 text-lime-500 hover:bg-lime-500 hover:text-white"
              >
                編輯
              </button>
              <button
                class="rounded-xl border border-red-500 px-2 py-1 text-red-500 hover:bg-red-500 hover:text-white"
              >
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
