<template>
    <!-- <header class="rounded border-gray-200 bg-gray-50 p-3">
        <div
            class="container mx-auto flex flex-wrap items-center justify-center md:justify-between"
        >
            <NuxtLink to="/" class="flex items-center">
                <span class="self-center whitespace-nowrap text-xl font-semibold text-sky-500"
                    >Wardrobe</span
                >
            </NuxtLink>
        </div>
    </header> -->

    <nav class="container mx-auto flex justify-between bg-white px-4 py-8">
        <NuxtLink to="/" class="flex items-center">
            <span class="self-center whitespace-nowrap text-xl font-semibold text-sky-500"
                >Wardrobe</span
            >
        </NuxtLink>
        <div class="hidden space-x-8 lg:flex">
            <NuxtLink to="/shop" class="font-semibold"> 商品 </NuxtLink>
            <NuxtLink to="/cart" class="font-semibold"> 購物車 </NuxtLink>
            <NuxtLink to="/login" class="font-semibold"> 登入 </NuxtLink>
        </div>
        <div class="flex lg:hidden">
            <div class="space-y-2">
                <span class="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span class="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span class="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>
        </div>
    </nav>
</template>
