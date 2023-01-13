import { defineStore } from 'pinia'
export const useCartStore = defineStore('cart', () => {
    const cart = ref([])
    const currentCartStep = ref(0)

    function setCart(_cart) {
        console.log(_cart.length)
        cart.value = _cart
        if (cart.value.length > 0) {
            setCurrentCartStep(1)
        }

        // await useFetch('/api/cart').then(
        //     (res) => {
        //         console.log(res)
        //         const data = res.data.value
        //         const error = res.error.value
        //         if (error) {
        //             // dealing error
        //             console.error(error)
        //         } else {
        //             //儲存到pinia
        //             console.log(data.data.carts)
        //         }
        //     },
        //     (error) => {
        //         console.log('exception...')
        //         console.log(error)
        //     },
        // )
    }
    function setCurrentCartStep(step) {
        currentCartStep.value = step
    }

    return { cart, currentCartStep, setCart, setCurrentCartStep }
})
