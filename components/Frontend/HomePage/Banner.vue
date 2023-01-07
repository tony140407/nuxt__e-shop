<template>
    <section class="banner">
        <div class="banner_wrapper container">
            <div class="banner_welcome">
                <h2 class="banner_welcome_title">
                    Welcome to <br />
                    Wardrobe!
                </h2>
                <NuxtLink to="/shop" class="banner_welcome_btn border-radius">前往購物</NuxtLink>
            </div>

            <div class="banner_triangle d-none d-md-block">別再讓你的衣櫥<br />空空如也!</div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.banner {
    @apply relative h-screen w-full overflow-hidden bg-cover bg-center;
    background-image: url('@/assets/images/banner.jpg');
    &_wrapper {
        @apply container;
    }
    &_welcome {
        @apply mt-[60px] box-border w-[350px] bg-opacity-30 p-[20px] font-bold text-white;
        &_title {
            @apply mb-[30px] border-2 border-white text-center text-3xl;
        }
        &_btn {
            @apply mx-auto block border-2 border-white p-[10px] text-center text-2xl;
            &:hover {
                @apply bg-white text-green-400;
            }
        }
    }
    &_triangle {
        @apply absolute -bottom-24 -right-48 h-[300px] w-[500px] -rotate-45 pt-[40px];
        @apply z-10 bg-green-400 text-center text-3xl font-bold text-white;
    }
}
</style>
