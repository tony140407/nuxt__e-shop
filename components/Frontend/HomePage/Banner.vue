<template>
    <section class="banner">
        <div class="banner_welcome">
            <h2 class="banner_welcome_title">
                Welcome to <br />
                Wardrobe!
            </h2>
            <NuxtLink to="/shop" class="banner_welcome_btn border-radius">前往購物</NuxtLink>
        </div>

        <div class="banner_triangle d-none d-md-block">別再讓你的衣櫥<br />空空如也!</div>
    </section>
</template>

<style lang="scss" scoped>
.banner {
    @apply relative h-screen max-h-[1080px] w-full overflow-hidden bg-cover bg-center;
    background-image: url('@/assets/images/banner.jpg');
    &_welcome {
        @apply absolute left-1/2 top-1/3 box-border min-w-[350px] -translate-x-1/2 -translate-y-1/2   transform bg-opacity-30 font-bold text-white md:left-28 md:translate-x-0;
        &_title {
            @apply mb-[30px] border-2 border-white py-8 px-4 text-center text-3xl;
        }
        &_btn {
            @apply mx-auto block border-2 border-white p-[10px] text-center text-2xl;
            &:hover {
                @apply bg-white text-lime-500;
            }
        }
    }
    &_triangle {
        @apply absolute -bottom-24 -right-48 h-[300px] w-[500px] -rotate-45 pt-[40px];
        @apply z-10 bg-lime-500 text-center text-3xl font-bold text-white;
    }
}
</style>
