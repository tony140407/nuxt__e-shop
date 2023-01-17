<script setup>
const { errors, useFieldModel } = useVeeValidate()
const [email] = useFieldModel(['email'])

const inputState = reactive({
    email: false,
})

const { sendResetEmail } = useFirebaseAuth()
async function handleSendPasswordResetEmail() {
    await sendResetEmail(email.value)
}

definePageMeta({
    title: 'Wardrobe | 忘記密碼',
    layout: 'navbar',
})
</script>

<template>
    <section
        class="mx-4 w-full max-w-[500px] overflow-hidden rounded-2xl bg-gray-100 drop-shadow-md"
    >
        <div class="p-12 sm:px-20">
            <div class="">
                <h2 class="mb-5 border-b-2 border-lime-500 text-xl font-extrabold text-lime-500">
                    忘記密碼
                </h2>
                <div class="mb-3">
                    <input
                        type="email"
                        class="form-control m-auto block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:shadow-lg focus:outline-none"
                        id="userEmail"
                        placeholder="電子信箱"
                        v-model="email"
                        @focus="() => (inputState.email = true)"
                    />
                    <label v-if="inputState.email" for="userEmail" class="text-sm text-red-500">{{
                        errors.email
                    }}</label>
                </div>
                <button
                    class="mb-2 w-full rounded-md bg-lime-500 py-1 font-bold text-white transition-all duration-200 ease-in-out hover:bg-white hover:text-lime-500 disabled:cursor-not-allowed disabled:bg-red-300 disabled:text-white"
                    @click="handleSendPasswordResetEmail"
                    :disabled="errors.email"
                >
                    傳送重設密碼信件
                </button>

                <NuxtLink to="/login" class="cursor-pointer text-lime-500 hover:text-lime-700"
                    >返回登入</NuxtLink
                >
            </div>
        </div>
    </section>
</template>
