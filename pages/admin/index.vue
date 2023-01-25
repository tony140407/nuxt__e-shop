<script setup>
import { useProductsStore } from '~/store/products';
const { $dayjs, $swal } = useNuxtApp();
const { user } = useFirebaseAuth();

const productsStore = useProductsStore();
// productsStore.fetchProducts();
const allProducts = computed(() => {
  return productsStore.products;
});

const isShow = ref(false);

const currentProduct = ref(null);

function showProduct(product) {
  currentProduct.value = JSON.parse(JSON.stringify(product));

  isShow.value = true;
}

const config = useRuntimeConfig();
async function updateProduct() {
  if (user.value.email !== config.public.ADMIN_MAIL) {
    $swal.fire({
      icon: 'error',
      title: '您沒有權限修改此產品',
      text: '請使用管理員帳號登入',
    });
    return;
  }
  const postData = currentProduct.value;
  await useFetch(`/api/admin/product/${currentProduct.value.id}`, {
    method: 'PUT',
    body: { data: postData },
  }).then(
    (res) => {
      const data = res.data.value;
      const error = res.error.value;
      if (data.success) {
        productsStore.fetchProducts();
        isShow.value = false;
      }
      $swal.fire({
        title: !data.success ? '失敗' : '成功',
        text: !data.success ? '發生了點錯誤' : data.message,
        icon: !data.success ? 'error' : 'success',
        // timer: 800,
      });

      if (error) {
        // dealing error
        console.error(error);
      }
    },
    (error) => {
      console.log('exception...');
      console.log(error);
    }
  );
}

async function deleteProduct() {
  if (user.value.email !== config.public.ADMIN_MAIL) {
    $swal.fire({
      icon: 'error',
      title: '您沒有權限刪除此產品',
      text: '請使用管理員帳號登入',
    });
    return;
  }
  console.log('刪除' + currentProduct.value.id);
}

definePageMeta({
  middleware: 'check-login',
  layout: 'admin',
});
</script>
<template>
  <div class="container relative my-10 mx-auto px-5">
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
                @click="showProduct(eachProduct)"
              >
                編輯
              </button>
              <button
                class="rounded-xl border border-red-500 px-2 py-1 text-red-500 hover:bg-red-500 hover:text-white"
                @click="deleteProduct(eachProduct.id)"
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
      v-if="currentProduct"
      :class="{ hidden: !isShow }"
    >
      <div
        class="relative mx-auto h-full w-full max-w-2xl rounded-lg border-2 border-gray-900 md:h-auto"
      >
        <!-- Modal content -->
        <div class="relative rounded-lg bg-white shadow">
          <!-- Modal header -->
          <div class="flex items-start justify-between rounded-t border-b p-4">
            <h3 class="text-xl font-semibold text-gray-900">編輯產品內容</h3>
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
                    for="title"
                    class="mb-2 block text-sm font-medium text-gray-900"
                    >產品名稱</label
                  >
                  <input
                    type="text"
                    id="title"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    v-model="currentProduct.title"
                    required
                  />
                </div>
              </div>
              <div class="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    for="origin_price"
                    class="mb-2 block text-sm font-medium text-gray-900"
                    >原價</label
                  >
                  <input
                    type="number"
                    id="origin_price"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    v-model="currentProduct.origin_price"
                    required
                  />
                </div>
                <div>
                  <label
                    for="price"
                    class="mb-2 block text-sm font-medium text-gray-900"
                    >售價</label
                  >
                  <input
                    type="number"
                    id="price"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    v-model="currentProduct.price"
                    required
                  />
                </div>
              </div>
              <div class="mb-6 grid gap-6">
                <div>
                  <label
                    for="description"
                    class="mb-2 block text-sm font-medium text-gray-900"
                    >描述</label
                  >
                  <input
                    type="text"
                    id="description"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    v-model="currentProduct.description"
                    required
                  />
                </div>
              </div>
              <div class="mb-6 grid gap-6">
                <div>
                  <label
                    for="content"
                    class="mb-2 block text-sm font-medium text-gray-900"
                    >內容</label
                  >
                  <input
                    type="text"
                    id="content"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    v-model="currentProduct.content"
                    required
                  />
                </div>
              </div>
            </form>
          </div>
          <!-- Modal footer -->
          <div
            class="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6"
          >
            <button
              data-modal-hide="defaultModal"
              type="button"
              class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
              @click="updateProduct"
            >
              修改
            </button>
            <button
              data-modal-hide="defaultModal"
              type="button"
              class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300"
              @click="isShow = false"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
