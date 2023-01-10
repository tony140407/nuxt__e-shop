<script setup>
// props & emit
const props = defineProps({
    cart: {
        type: Array,
    },
})
const { cart } = toRefs(props)

function changeQty(num) {
    productDetail.value.qty = num
    // axios
    axiosPutCartQty(num)

    function axiosPutCartQty(qty) {
        changeLoading(true)
        const data = { data: { product_id: productDetail.value.product_id, qty: qty } }
        apiUpdateCart(productDetail.value.id, data)
            .then((res) => {
                changeLoading(false)
                if (res.data.success == true) {
                    VueSweetalert2({
                        icon: 'success',
                        title: '成功改變商品數量!',
                        timer: 1000,
                        showCloseButton: false,
                        showCancelButton: false,
                    })
                    getCartData()
                }
            })
            .catch((error) => {
                changeLoading(false)
                console.log(error)
            })
    }
}

function deleteSingleProduct() {
    changeLoading(true)
    apiDeleteCart(productDetail.value.id)
        .then((res) => {
            changeLoading(false)
            if (res.data.success == true) {
                // storeData.carts
                VueSweetalert2({
                    icon: 'success',
                    title: '已從購物車中刪除產品!',
                    timer: 1000,
                    showCloseButton: false,
                    showCancelButton: false,
                })
                getCartData()
            }
        })
        .catch((error) => {
            changeLoading(false)
            console.log(error)
        })
}
</script>

<template>
    <ul class="w-full">
        <li
            class="mb-8 grid grid-cols-12 overflow-hidden rounded-2xl bg-gray-100"
            v-for="eachProduct in cart"
            :key="eachProduct.id"
        >
            <div
                class="col-span-5 w-full bg-cover bg-center bg-no-repeat md:col-span-3"
                :style="{ 'background-image': `url(${eachProduct.product.imageUrl})` }"
            ></div>
            <div class="col-span-7 grid grid-cols-1 md:col-span-9 md:grid-cols-2">
                <div class="justify-between p-4">
                    <h3 class="mb-8 text-xl font-semibold">{{ eachProduct.product.title }}</h3>
                    <p
                        class="mb-8 w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm text-gray-500"
                    >
                        {{ eachProduct.product.description }}
                    </p>

                    <div class="flex items-end justify-between">
                        <p class="text-xl font-semibold">NT$ {{ eachProduct.product.price }}</p>
                        <p
                            class="text-sm text-gray-500 line-through"
                            v-if="eachProduct.product.price !== eachProduct.product.origin_price"
                        >
                            NT$ {{ eachProduct.product.origin_price }}
                        </p>
                    </div>
                </div>
                <div class="flex items-center justify-center">
                    <div class="w-full max-w-sm p-4">
                        <div class="relative mb-4 flex items-center">
                            <input
                                type="number"
                                value="1"
                                class="peer relative h-10 w-full rounded-md bg-gray-50 text-center outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg"
                                min="1"
                            />
                            <button
                                class="max-w-16 absolute left-0 h-10 w-1/6 rounded-l-md bg-green-400 text-xs font-semibold text-white transition-all duration-200 ease-in-out hover:bg-green-600"
                            >
                                -
                            </button>
                            <button
                                class="max-w-16 absolute right-0 h-10 w-1/5 rounded-r-md bg-green-400 text-xs font-semibold text-white transition-all duration-200 ease-in-out hover:bg-green-600"
                            >
                                +
                            </button>
                        </div>
                        <button
                            class="w-full rounded-md bg-white py-1 font-bold text-red-500 outline outline-1 outline-red-500 transition-all duration-200 ease-in-out hover:bg-red-500 hover:text-white"
                        >
                            刪除
                        </button>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>
