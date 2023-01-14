<script setup>
const connectDetail = ref({
    name: '',
    phone: '',
    email: '',
})
</script>
<template>
    <section class="w-full overflow-hidden rounded-2xl bg-gray-100 drop-shadow-md">
        <!-- <div class="min-h-[120px] p-5 py-7 text-xl">
            <div class="relative mx-auto flex h-full w-4/5 flex-col justify-between">
                <p v-if="connectDetail.name" class="mb-3">{{ connectDetail.name }} 先生/小姐</p>
                <p v-if="connectDetail.phone" class="mb-3">電話: {{ connectDetail.phone }}</p>
                <p v-if="connectDetail.email" class="mb-6">信箱: {{ connectDetail.email }}</p>

                <button
                    v-if="connectDetail.name"
                    class="w-full transform rounded-2xl border border-black py-2 px-4 hover:bg-gray-700 hover:text-gray-100"
                >
                    儲存
                </button>

                <button
                    v-if="!connectDetail.name && !connectDetail.phone && !connectDetail.email"
                    class="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform transform rounded-2xl border border-black py-2 px-4 hover:bg-gray-700 hover:text-gray-100"
                >
                    使用儲存資料卡
                </button>
            </div>
        </div> -->
        <div class="p-5">
            <div class="mb-3">
                <label for="userNameInput" class="form-label mb-2 inline-block text-gray-700"
                    >收件者姓名</label
                >
                <input
                    type="text"
                    class="form-control m-auto block w-4/5 rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:shadow-lg focus:outline-none"
                    id="userNameInput"
                    placeholder="收件者姓名"
                    v-model="connectDetail.name"
                />
            </div>
            <div class="mb-3 xl:w-96">
                <label for="userNameInput" class="form-label mb-2 inline-block text-gray-700"
                    >收件者電話</label
                >
                <input
                    type="text"
                    class="form-control m-auto block w-4/5 rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:shadow-lg focus:outline-none"
                    id="userNameInput"
                    placeholder="收件者電話"
                    v-model="connectDetail.phone"
                />
            </div>
            <div class="mb-3 xl:w-96">
                <label for="userNameInput" class="form-label mb-2 inline-block text-gray-700"
                    >電子郵件</label
                >
                <input
                    type="text"
                    class="form-control m-auto block w-4/5 rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:shadow-lg focus:outline-none"
                    id="userNameInput"
                    placeholder="電子郵件"
                    v-model="connectDetail.email"
                />
            </div>
        </div>
    </section>
</template>
