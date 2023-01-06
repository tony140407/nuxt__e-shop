<script setup>
const props = defineProps({
    productDetail: {
        type: Object,
        default: () => ({
            title: '預設產品名稱',
            price: 0,
            origin_price: 0,
            size: [],
            imageUrl: 'https://picsum.photos/200/300',
            onSale: true, // FIXME: 測試時用，之後要改成 false
        }),
    },
})
const productDetail = ref(props.productDetail)
const card_detail_size = ref('XS')
</script>
<template>
    <section
        class="card group m-5 max-w-md rounded-2xl px-5 drop-shadow-xl"
        style="background: linear-gradient(180deg, #000 40%, #fff 40%)"
    >
        <div class="flex flex-row gap-3">
            <div class="relative my-5 basis-1/2">
                <div
                    class="h-full w-full bg-cover bg-center bg-no-repeat"
                    :style="{ 'background-image': `url(${productDetail.imageUrl})` }"
                ></div>
                <button
                    class="absolute bottom-0 left-1/2 hidden w-4/5 -translate-x-1/2 -translate-y-1/2 transform rounded-xl bg-white py-3 ring ring-slate-300 ring-offset-2 group-hover:block"
                    @click="clickToSeeMorePage(currentProductID)"
                >
                    查看更多
                </button>
            </div>
            <div class="basis-1/2">
                <div class="box-border flex h-2/5 flex-col justify-between py-5 text-white">
                    <h4 class="text-xl font-extrabold">{{ productDetail?.title }}</h4>
                    <div class="flex items-end justify-between">
                        <p class="">NT${{ 300 }}</p>
                        <del v-if="productDetail.onSale" class="text-xs">
                            NT${{ productDetail?.origin_price }}
                        </del>
                    </div>
                </div>
                <div class="box-border flex h-3/5 flex-col justify-end py-5">
                    <div class="grid grid-cols-3 gap-4">
                        <div
                            class="cursor-pointer border-b-4 border-white text-center hover:border-green-300"
                            :class="{ 'border-green-300': card_detail_size == 'XS' }"
                            @click="card_detail_size = 'XS'"
                        >
                            XS
                        </div>
                        <div
                            class="cursor-pointer border-b-4 border-white text-center hover:border-green-300"
                            :class="{ 'border-green-300': card_detail_size == 'S' }"
                            @click="card_detail_size = 'S'"
                        >
                            S
                        </div>
                        <div
                            class="cursor-pointer border-b-4 border-white text-center hover:border-green-300"
                            :class="{ 'border-green-300': card_detail_size == 'M' }"
                            @click="card_detail_size = 'M'"
                        >
                            M
                        </div>
                        <div
                            class="cursor-pointer border-b-4 border-white text-center hover:border-green-300"
                            :class="{ 'border-green-300': card_detail_size == 'L' }"
                            @click="card_detail_size = 'L'"
                        >
                            L
                        </div>
                        <div
                            class="cursor-pointer border-b-4 border-white text-center hover:border-green-300"
                            :class="{ 'border-green-300': card_detail_size == 'XL' }"
                            @click="card_detail_size = 'XL'"
                        >
                            XL
                        </div>
                        <div
                            class="cursor-pointer border-b-4 border-white text-center hover:border-green-300"
                            :class="{ 'border-green-300': card_detail_size == '2XL' }"
                            @click="card_detail_size = '2XL'"
                        >
                            2XL
                        </div>
                        <div></div>
                    </div>
                    <button
                        class="card_addCartBtn w-full rounded-xl bg-red-400 py-3"
                        @click="addCart()"
                    >
                        加入購物車
                    </button>
                </div>
            </div>
        </div>
        <!-- <span class="card_likeIcon" :class="{ 'card_likeIcon--active': card_likeIcon_isActive }" @click="card_likeIcon_isActive = !card_likeIcon_isActive"><font-awesome-icon :icon="card_likeIcon_isActive ? ['fas', 'heart'] : ['far', 'heart']" /></span>
  <div class="card_onSale" v-if="productDetail.onSale"><img src="@/assets/images/icons/onSale.svg" alt="" srcset=""> on sale</div> -->
    </section>
</template>
