<script setup>
const { registerUser } = useFirebaseAuth()

const user = reactive({
    email: '',
    password: '',
})

async function handleRegistration() {
    await registerUser(user.email, user.password)
}

definePageMeta({
    title: 'Wardrobe | 註冊',
    layout: 'navbar',
})
</script>

<template>
    <section
        class="mx-4 w-full max-w-[500px] overflow-hidden rounded-2xl bg-gray-100 drop-shadow-md"
    >
        <div class="p-12 sm:px-20">
            <div class="mb-8">
                <h2 class="mb-5 border-b-2 border-lime-500 text-xl font-extrabold text-lime-500">
                    註冊
                </h2>
                <div class="mb-3">
                    <input
                        type="email"
                        class="form-control m-auto block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:shadow-lg focus:outline-none"
                        id="userEmail"
                        placeholder="使用者帳號"
                        v-model="user.email"
                    />
                </div>
                <div class="mb-3">
                    <input
                        type="password"
                        class="form-control m-auto block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:shadow-lg focus:outline-none"
                        id="userPassword"
                        placeholder="密碼"
                        v-model="user.password"
                    />
                </div>
                <button
                    class="w-full rounded-md bg-lime-500 py-1 font-bold text-white outline outline-1 outline-lime-500 transition-all duration-200 ease-in-out hover:bg-white hover:text-lime-500"
                    @click="handleRegistration"
                >
                    註冊
                </button>
            </div>
            <div>
                <p class="text-l mb-5 border-b-2 border-lime-500 font-extrabold text-lime-500">
                    或使用以下註冊選項
                </p>
            </div>
        </div>
    </section>
</template>
