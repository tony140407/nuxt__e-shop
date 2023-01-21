<template>
    <section class="grid min-h-[300px] w-full grid-cols-1 gap-6 py-20 md:grid-cols-2">
        <div class="flex items-center justify-center">
            <img
                class="w-2/5 max-w-xs animate-bounce"
                src="~/assets/images/icons/search.svg"
                alt=""
                srcset=""
            />
        </div>
        <div class="flex flex-col items-center justify-center py-10">
            <h3 class="inline-block border-b border-lime-300 text-2xl font-extrabold">
                發生了點錯誤! 找不到相關頁面。
            </h3>
            <NuxtLink
                to="/"
                class="border-radius w-100 group mt-2 block border-2 border-lime-500 py-2 px-4 text-center text-xl font-extrabold text-lime-500 hover:bg-lime-500 hover:text-white"
                >返回首頁 <span class="hidden group-hover:inline-block">></span></NuxtLink
            >
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    error: Object,
})

const handleError = () => clearError({ redirect: '/' })
</script>
