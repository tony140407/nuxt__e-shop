<script setup>
import { useCartStore } from '~/store/cart';
const cartStore = useCartStore();
const { errors, useFieldModel } = useVeeValidate();

const [name, tel, email, address] = useFieldModel([
  'name',
  'tel',
  'email',
  'address',
]);

const massage = ref('');
</script>
<template>
  <section
    class="w-4/5 max-w-[700px] overflow-hidden rounded-2xl bg-gray-100 drop-shadow-md"
  >
    <div class="py-5 px-10">
      <div class="mb-3">
        <label
          for="userNameInput"
          class="form-label mb-2 inline-block font-extrabold text-gray-700"
          >收件者姓名<span class="ml-2 text-sm text-red-500">{{
            errors.name
          }}</span></label
        >
        <input
          type="text"
          class="form-control m-auto block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:shadow-lg focus:outline-none"
          id="userNameInput"
          placeholder="收件者姓名"
          v-model="name"
          @blur="
            () => {
              if (!errors.name || !name) {
                cartStore.setUserProfile('name', name);
              }
            }
          "
        />
      </div>
      <div class="mb-3">
        <label
          for="userTelInput"
          class="form-label mb-2 inline-block font-extrabold text-gray-700"
          >收件者電話<span class="ml-2 text-sm text-red-500">{{
            errors.tel
          }}</span></label
        >
        <input
          type="text"
          class="form-control m-auto block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:shadow-lg focus:outline-none"
          id="userTelInput"
          placeholder="收件者電話"
          v-model="tel"
          @blur="
            () => {
              if (!errors.tel || !tel) {
                cartStore.setUserProfile('tel', tel);
              }
            }
          "
        />
      </div>
      <div class="mb-3">
        <label
          for="userMailInput"
          class="form-label mb-2 inline-block font-extrabold text-gray-700"
          >電子郵件<span class="ml-2 text-sm text-red-500">{{
            errors.email
          }}</span></label
        >
        <input
          type="text"
          class="form-control m-auto block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:shadow-lg focus:outline-none"
          id="userMailInput"
          placeholder="電子郵件"
          v-model="email"
          @blur="
            () => {
              if (!errors.email || !email) {
                cartStore.setUserProfile('email', email);
              }
            }
          "
        />
      </div>
      <div class="mb-3">
        <label
          for="userAddressInput"
          class="form-label mb-2 inline-block font-extrabold text-gray-700"
          >地址<span class="ml-2 text-sm text-red-500">{{
            errors.address
          }}</span></label
        >
        <input
          type="text"
          class="form-control m-auto block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:shadow-lg focus:outline-none"
          id="userAddressInput"
          placeholder="地址"
          v-model="address"
          @blur="
            () => {
              if (!errors.address || !address) {
                cartStore.setUserProfile('address', address);
              }
            }
          "
        />
      </div>
      <div class="">
        <label
          for="userMessageInput"
          class="form-label mb-2 inline-block font-extrabold text-gray-700"
          >留言</label
        >
        <input
          type="text"
          class="form-control m-auto block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:shadow-lg focus:outline-none"
          id="userMessageInput"
          placeholder="留言"
          v-model="massage"
          @blur="cartStore.setUserProfile('massage', massage)"
        />
      </div>
    </div>
  </section>
</template>
