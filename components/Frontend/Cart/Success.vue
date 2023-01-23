<template>
    <section
        class="grid min-h-[300px] w-full grid-cols-1 gap-6 border border-b-2 border-r-2 border-lime-300 py-20 md:grid-cols-2"
    >
        <div class="flex items-center justify-center">
            <ClientOnly>
                <font-awesome-icon
                    class="w-2/5 max-w-xs animate-bounce text-lime-500"
                    :icon="['far', 'thumbs-up']"
                />
            </ClientOnly>
        </div>
        <div class="flex flex-col items-center justify-between py-10">
            <h3 class="inline-block border-b border-lime-300 text-2xl font-extrabold">成功訂購!</h3>

            <NuxtLink
                to="/shop"
                class="border-radius w-100 group mt-8 block border-2 border-lime-500 px-4 py-2 py-5 text-center text-xl font-extrabold text-lime-500 hover:bg-lime-500 hover:text-white"
                >返回商店 <span class="hidden group-hover:inline-block">></span></NuxtLink
            >
        </div>
    </section>
</template>
