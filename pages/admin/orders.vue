<script setup>
import { useOrdersStore } from '~/store/orders';
const { $dayjs, $swal } = useNuxtApp();
const { user } = useFirebaseAuth();

const ordersStore = useOrdersStore();

const allOrders = computed(() => {
  return ordersStore.orders;
});

const isShow = ref(false);

const currentOrder = ref(null);

function showOrder(order) {
  currentOrder.value = JSON.parse(JSON.stringify(order));

  isShow.value = true;
}

const config = useRuntimeConfig();
async function updateOrder() {
  console.log(currentOrder.value);
  if (user.value.email !== config.public.ADMIN_MAIL) {
    $swal.fire({
      icon: 'error',
      title: '您沒有權限修改此訂單',
      text: '請使用管理員帳號登入',
    });
    return;
  }
  // const postData = currentOrder.value;
  // await useFetch(`/api/admin/order/${currentOrder.value.id}`, {
  //   method: 'PUT',
  //   body: { data: postData },
  // }).then(
  //   (res) => {
  //     const data = res.data.value;
  //     const error = res.error.value;
  //     if (data.success) {
  //       ordersStore.fetchOrders();
  //       isShow.value = false;
  //     }
  //     $swal.fire({
  //       title: !data.success ? '失敗' : '成功',
  //       text: !data.success ? '發生了點錯誤' : data.message,
  //       icon: !data.success ? 'error' : 'success',
  //       // timer: 800,
  //     });

  //     if (error) {
  //       // dealing error
  //       console.error(error);
  //     }
  //   },
  //   (error) => {
  //     console.log('exception...');
  //     console.log(error);
  //   }
  // );
}

async function deleteOrder() {
  if (user.value.email !== config.public.ADMIN_MAIL) {
    $swal.fire({
      icon: 'error',
      title: '您沒有權限刪除此產品',
      text: '請使用管理員帳號登入',
    });
    return;
  }
  console.log('刪除' + currentOrder.value.id);
}

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
                @click="showOrder(eachOrder)"
              >
                編輯
              </button>
              <button
                class="rounded-xl border border-red-500 px-2 py-1 text-red-500 hover:bg-red-500 hover:text-white"
                @click="deleteOrder"
              >
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Main modal -->
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      class="fixed inset-0 z-50 flex w-full transform items-center justify-center p-4"
      v-if="currentOrder"
      :class="{ hidden: !isShow }"
    >
      <div
        class="relative mx-auto h-full w-full max-w-2xl rounded-lg border-2 border-gray-900 md:h-auto"
      >
        <!-- Modal content -->
        <div class="relative rounded-lg bg-white shadow">
          <!-- Modal header -->
          <div class="flex items-start justify-between rounded-t border-b p-4">
            <h3 class="text-xl font-semibold text-gray-900">編輯訂單內容</h3>
            <button
              type="button"
              class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
              data-modal-hide="defaultModal"
              @click="isShow = false"
            >
              <svg
                aria-hidden="true"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="space-y-6 p-6">
            <form>
              <div class="mb-6 grid gap-6">
                <div>
                  <label
                    for="order_id"
                    class="mb-2 block text-sm font-medium text-gray-900"
                    >訂單編號</label
                  >
                  <input
                    type="text"
                    id="order_id"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    v-model="currentOrder.id"
                    disabled
                  />
                </div>
              </div>
              <div class="mb-6 grid gap-6">
                <div>
                  <label
                    for="name"
                    class="mb-2 block text-sm font-medium text-gray-900"
                    >訂購人</label
                  >
                  <input
                    type="text"
                    id="name"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    v-model="currentOrder.user.name"
                    required
                  />
                </div>
              </div>
              <div class="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    for="tel"
                    class="mb-2 block text-sm font-medium text-gray-900"
                    >電話</label
                  >
                  <input
                    type="text"
                    id="tel"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    v-model="currentOrder.user.tel"
                    required
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="mb-2 block text-sm font-medium text-gray-900"
                    >信箱</label
                  >
                  <input
                    type="text"
                    id="email"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    v-model="currentOrder.user.email"
                    required
                  />
                </div>
              </div>
              <div class="mb-6 grid gap-6">
                <div>
                  <label
                    for="address"
                    class="mb-2 block text-sm font-medium text-gray-900"
                    >地址</label
                  >
                  <input
                    type="text"
                    id="address"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    v-model="currentOrder.user.address"
                  />
                </div>
              </div>
              <div class="mb-6 grid gap-6">
                <div>
                  <label
                    for="message"
                    class="mb-2 block text-sm font-medium text-gray-900"
                    >留言</label
                  >
                  <input
                    type="text"
                    id="message"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    v-model="currentOrder.user.message"
                  />
                </div>
              </div>
              <div class="mb-6 grid gap-6">
                <ul
                  class="max-w-md list-inside list-disc space-y-1 text-gray-500 dark:text-gray-400"
                >
                  <li v-for="(value, key) in currentOrder.products" :key="key">
                    {{ value.product.title }} x {{ value.qty }}
                  </li>
                </ul>
              </div>
            </form>
          </div>
          <!-- Modal footer -->
          <div
            class="flex items-center justify-end space-x-2 rounded-b border-t border-gray-200 p-6"
          >
            <button
              data-modal-hide="defaultModal"
              type="button"
              class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300"
              @click="isShow = false"
            >
              取消
            </button>
            <button
              data-modal-hide="defaultModal"
              type="button"
              class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
              @click="updateOrder"
            >
              修改
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
