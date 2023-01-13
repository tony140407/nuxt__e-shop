<script setup>
import { useCartStore } from '~/store/cart'
const cartStore = useCartStore()
const cart = computed(() => cartStore.cart)
const currentCartStep = computed(() => cartStore.currentCartStep)

cartStore.setCart([
    {
        final_total: 399,
        id: '-NLJIVjxW24aDeAY6TcI',
        product: {
            category: '衣服',
            content:
                '每個人的一生中，幾乎可說碰到T恤這件事，是必然會發生的。薩迪曾講過，誰若自顧快走，你別和他結伴同走; 誰若對你薄情，你別把他當作朋友。這段話的餘韻不斷在我腦海中迴盪著。\n',
            description:
                '2021新款圓領T恤，超細纖維、舒適輕柔，沒有過度華麗的裝飾，肯定是今年夏天的主角。',
            id: '-MqslGAtuHQRJ-zRwF-7',
            imageUrl:
                'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            imagesUrl: [''],
            is_enabled: true,
            num: 146,
            origin_price: 450,
            price: 399,
            title: '印花圓領T恤(XS)',
            unit: '件',
        },
        product_id: '-MqslGAtuHQRJ-zRwF-7',
        qty: 1,
        total: 399,
    },
    {
        final_total: 399,
        id: '-NLJIVjxW24aDeAY6sTcI',
        product: {
            category: '衣服',
            content:
                '每個人的一生中，幾乎可說碰到T恤這件事，是必然會發生的。薩迪曾講過，誰若自顧快走，你別和他結伴同走; 誰若對你薄情，你別把他當作朋友。這段話的餘韻不斷在我腦海中迴盪著。\n',
            description:
                '2021新款圓領T恤，超細纖維、舒適輕柔，沒有過度華麗的裝飾，肯定是今年夏天的主角。',
            id: '-MqslGAtuHQRJ-zRwF-7',
            imageUrl:
                'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            imagesUrl: [''],
            is_enabled: true,
            num: 146,
            origin_price: 450,
            price: 399,
            title: '印花圓領T恤(XS)',
            unit: '件',
        },
        product_id: '-MqslGAtuHQRJ-zRwF-7',
        qty: 1,
        total: 399,
    },
])

definePageMeta({
    title: 'Wardrobe | Cart',
    layout: 'recommend',
})
</script>
<template>
    <section class="mg:p-0 container mx-auto mt-10 px-5">
        <FrontendCartStepBar class="mb-5"></FrontendCartStepBar>
        <h3 class="border-b-2 border-lime-500 text-2xl font-extrabold text-lime-500">購物車</h3>
        <div class="h-100 w-100 flex flex-col items-center justify-center py-6">
            <FrontendCartAllSteps v-if="cart.length > 0">
                <template #content>
                    <FrontendCartSelectedProduct v-if="currentCartStep === 1" :cart="cart" />
                    <FrontendCartEmpty v-if="currentCartStep === 3"></FrontendCartEmpty>
                </template>
            </FrontendCartAllSteps>

            <FrontendCartEmpty v-else></FrontendCartEmpty>
        </div>
    </section>
</template>
<!-- <style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.25s ease;
}
.fade-enter,
.fade-leave-to {
    transform: translateX(100%);
    opacity: 0;
}
</style> -->
