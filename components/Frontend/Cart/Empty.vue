<template>
    <section
        class="grid min-h-[300px] w-full grid-cols-1 gap-6 border border-b-2 border-r-2 border-lime-300 py-20 md:grid-cols-2"
    >
        <div class="flex items-center justify-center">
            <img
                class="w-2/5 max-w-xs animate-bounce"
                src="~/assets/images/icons/search.svg"
                alt=""
                srcset=""
            />
        </div>
        <div class="flex flex-col items-center justify-between py-10">
            <h3 class="inline-block border-b border-lime-300 text-2xl font-extrabold">
                Oops! 您的購物車空無一物。
            </h3>
            <div>
                <p class="mb-3">前往商店把喜歡的服飾帶回家吧!</p>
                <NuxtLink
                    to="/shop"
                    class="border-radius w-100 group block border-2 border-lime-500 py-5 text-center text-xl font-extrabold text-lime-500 hover:bg-lime-500 hover:text-white"
                    >前往商店 <span class="hidden group-hover:inline-block">></span></NuxtLink
                >
            </div>
        </div>
    </section>
</template>
