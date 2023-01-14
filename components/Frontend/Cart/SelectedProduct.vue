<script setup>
const { $swal } = useNuxtApp()
// props & emit
const props = defineProps({
    cart: {
        type: Array,
    },
})
const { cart } = toRefs(props)

function handleClick(e) {
    const method = e.target.id // 'minus' or 'plus'
    if (method !== 'minus' && method !== 'plus') return
    const cartID = e.target.getAttribute('data-cartID')
    const productID = e.target.getAttribute('data-productID')
    const currentProduct = cart.value.find(
        (item) => item.id == cartID && item.product_id == productID,
    )
    currentProduct.qty = method == 'minus' ? currentProduct.qty - 1 : currentProduct.qty + 1
    changeQty(currentProduct, currentProduct.qty)

    function changeQty(currentProduct, qty) {
        console.dir({ product_id: currentProduct.product_id, qty: qty })
        console.log(qty)
        // const data = {
        //     data: { product_id: currentProduct.product_id, qty: qty },
        // }
        // apiUpdateCart(currentProduct.id, data)
        //     .then((res) => {
        //         changeLoading(false)
        //         if (res.data.success == true) {
        //             VueSweetalert2({
        //                 icon: 'success',
        //                 title: '成功改變商品數量!',
        //                 timer: 1000,
        //                 showCloseButton: false,
        //                 showCancelButton: false,
        //             })
        //             getCartData()
        //         }
        //     })
        //     .catch((error) => {
        //         changeLoading(false)
        //         console.log(error)
        //     })
    }
}

function deleteSingleProduct(productDetail) {
    $swal
        .fire({
            title: `你確定要移除"${productDetail.product.title}"嗎?`,
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: 'rgb(239 68 68)',
            cancelButtonColor: 'rgb(203 213 225);',
            confirmButtonText: '確定',
            cancelButtonText: '取消',
            reverseButtons: true,
        })
        .then((result) => {
            if (result.isConfirmed) {
                // deleteProduct()
                console.log('刪除成功')
            }
        })

    function deleteProduct() {
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
}

const total = computed(() => {
    let total = 0
    cart.value.forEach((item) => {
        total += item.product.price * item.qty
    })
    return total
})
const shippingFee = computed(() => {
    return total.value >= 1000 ? 0 : 60
})
</script>

<template>
    <ul class="mb-5 w-full border-b-2 border-lime-500" @click="handleClick">
        <li
            class="mb-8 grid grid-cols-12 overflow-hidden rounded-2xl bg-gray-100 drop-shadow-md"
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
                                :value="eachProduct.qty"
                                class="peer relative h-10 w-full rounded-md bg-gray-50 text-center outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg"
                                min="1"
                                disabled
                            />
                            <button
                                id="minus"
                                :disabled="eachProduct.qty == 1"
                                :data-cartID="eachProduct.id"
                                :data-productID="eachProduct.product_id"
                                class="max-w-16 absolute left-0 h-10 w-1/6 rounded-l-md bg-lime-500 text-xs font-semibold text-white transition-all duration-200 ease-in-out hover:bg-lime-600 disabled:bg-gray-400"
                            >
                                -
                            </button>
                            <button
                                id="plus"
                                :data-cartID="eachProduct.id"
                                :data-productID="eachProduct.product_id"
                                class="max-w-16 absolute right-0 h-10 w-1/5 rounded-r-md bg-lime-500 text-xs font-semibold text-white transition-all duration-200 ease-in-out hover:bg-lime-600"
                            >
                                +
                            </button>
                        </div>
                        <button
                            class="w-full rounded-md bg-white py-1 font-bold text-red-500 outline outline-1 outline-red-500 transition-all duration-200 ease-in-out hover:bg-red-500 hover:text-white"
                            @click="deleteSingleProduct(eachProduct)"
                        >
                            刪除
                        </button>
                    </div>
                </div>
            </div>
        </li>
    </ul>

    <section class="w-full">
        <div class="mb-8 flex justify-between gap-4 md:justify-end">
            <h3 class="text-xl font-semibold">總金額</h3>
            <p class="text-xl font-semibold">NT$ {{ total }}</p>
        </div>
        <div class="mb-8 flex justify-between gap-4 md:justify-end">
            <h3 class="text-xl font-semibold">運費</h3>
            <p class="text-xl font-semibold">NT$ {{ shippingFee }}</p>
        </div>
        <div class="flex justify-between gap-4 md:justify-end">
            <h3 class="text-xl font-semibold">總計</h3>
            <p class="text-xl font-semibold">NT$ {{ total + shippingFee }}</p>
        </div>
    </section>
</template>
