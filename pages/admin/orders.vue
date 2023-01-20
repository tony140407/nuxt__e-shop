<script setup>
import { useOrdersStore } from '~/store/orders';
const { $dayjs } = useNuxtApp();

const ordersStore = useOrdersStore();

ordersStore.fetchOrders();

const allOrders = computed(() => {
  return ordersStore.orders;
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
      訂單管理頁面
    </h1>

    <div class="relative overflow-x-auto rounded-xl border border-gray-700">
      <table class="w-full text-left text-sm text-gray-500">
        <thead class="bg-gray-700 text-xs uppercase text-white">
          <tr>
            <th scope="col" class="px-6 py-3">訂單編號</th>
            <th scope="col" class="px-6 py-3">訂單金額</th>
            <th scope="col" class="px-6 py-3">下訂時間</th>
            <th scope="col" class="px-6 py-3">修改訂單</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-b bg-white"
            v-for="eachOrder in allOrders"
            :key="eachOrder.id"
          >
            <th
              scope="row"
              class="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
            >
              {{ eachOrder.id }}
            </th>
            <td class="px-6 py-4">${{ eachOrder.total }}</td>
            <td class="px-6 py-4">
              {{
                $dayjs(eachOrder.create_at * 1000).format('YYYY-MM-DD HH:mm')
              }}
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
