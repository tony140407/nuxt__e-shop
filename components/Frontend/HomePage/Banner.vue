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
    @apply relative w-full h-screen bg-cover bg-center overflow-hidden;
    background-image: url('@/assets/images/banner.jpg');
    &_wrapper {
        @apply container;
    }
    &_welcome {
        @apply w-[350px] box-border mt-[60px] p-[20px] text-white bg-opacity-30 font-bold;
        &_title {
            @apply text-3xl border-2 border-white mb-[30px] text-center;
        }
        &_btn {
            @apply text-2xl p-[10px] block mx-auto text-center border-2 border-white;
            &:hover {
                @apply bg-white text-green-400;
            }
        }
    }
    &_triangle {
        @apply pt-[40px] absolute -bottom-24 -right-48 w-[500px] h-[300px] -rotate-45;
        @apply bg-green-400 text-center text-white z-10 font-bold text-3xl;
    }
}
</style>
