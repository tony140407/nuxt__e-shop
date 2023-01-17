<script setup>
const { errors, useFieldModel } = useVeeValidate()
const [email, password] = useFieldModel(['email', 'password'])

const inputState = reactive({
    email: false,
    password: false,
})

const { signInByEmail } = useFirebaseAuth()
async function handleLogin() {
    await signInByEmail(email.value, password.value)
}

definePageMeta({
    title: 'Wardrobe | 登入',
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
                    登入
                </h2>
                <div class="mb-3">
                    <input
                        type="email"
                        class="form-control m-auto block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:shadow-lg focus:outline-none"
                        id="userEmail"
                        placeholder="使用者帳號"
                        v-model="email"
                        @focus="() => (inputState.email = true)"
                    />
                    <label v-if="inputState.email" for="userEmail" class="text-sm text-red-500">{{
                        errors.email
                    }}</label>
                </div>
                <div class="mb-3">
                    <input
                        type="password"
                        class="form-control m-auto block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:shadow-lg focus:outline-none"
                        id="userPassword"
                        placeholder="密碼"
                        v-model="password"
                        @focus="() => (inputState.password = true)"
                    />
                    <label
                        v-if="inputState.password"
                        for="userPassword"
                        class="text-sm text-red-500"
                        >{{ errors.password }}</label
                    >
                </div>
                <button
                    class="mb-2 w-full rounded-md bg-lime-500 py-1 font-bold text-white transition-all duration-200 ease-in-out hover:bg-white hover:text-lime-500 disabled:cursor-not-allowed disabled:bg-red-300 disabled:text-white"
                    @click="handleLogin"
                >
                    登入
                </button>
                <div class="flex justify-between text-lime-500">
                    <NuxtLink to="/login/forgetPassword" class="cursor-pointer hover:text-lime-700"
                        >忘記密碼?</NuxtLink
                    >
                    <NuxtLink to="/login/register" class="cursor-pointer hover:text-lime-700"
                        >尚未註冊?</NuxtLink
                    >
                </div>
            </div>
            <div>
                <p class="text-l mb-5 border-b-2 border-lime-500 font-extrabold text-lime-500">
                    或使用以下登入選項
                </p>
            </div>
        </div>
    </section>
</template>
