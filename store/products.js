import { defineStore } from 'pinia'
export const useProductsStore = defineStore('products', () => {
    const products = ref([])
    function setProducts(data) {
        const newData = filterProducts(data)
        products.value = newData
        function filterProducts(product) {
            // 資料庫刪不掉的資料
            const excessDataIndex = product.findIndex(
                (element) => element.title == '[賣]動物園造型衣服3',
            )
            if (excessDataIndex !== -1) {
                product.splice(excessDataIndex, 1)
            }

            // 資料庫刪不掉的資料
            // 過濾 size 資訊
            const bracketReg = /\(*\)/ //所有有括號的
            const sizeReg = {
                XS: /\(+XS+\)/,
                S: /\(+S+\)/,
                M: /\(+M+\)/,
                L: /\(+L+\)/,
                XL: /\(+XL+\)/,
                XXL: /\(+XXL+\)/,
            }
            const sizeList = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
            let newProducts = []
            // 先找出無size的樣本
            product.filter((eachProduct) => {
                // 沒有括號的拉出來當Card size屬性填入同名產品
                if (!bracketReg.test(eachProduct.title)) {
                    eachProduct.size = {
                        XS: '',
                        S: '',
                        M: '',
                        L: '',
                        XL: '',
                        XXL: '',
                    }
                    newProducts.push(eachProduct)
                }
            })
            // 有括號的 ID 填入 size 屬性中
            sizeList.filter((eachSize) => {
                product.filter((eachProduct) => {
                    if (sizeReg[eachSize].test(eachProduct.title)) {
                        const key = eachProduct.title.replace(sizeReg[eachSize], '')
                        newProducts.find((eachNewProduct) => {
                            if (eachNewProduct.title == key) {
                                eachNewProduct.size[eachSize] = eachProduct.id
                                return true
                            }
                        })
                    }
                })
            })
            return newProducts
        }
    }
    function filterCategory(category) {
        // 如果沒有選擇分類，回傳全部
        if (category == '全部') {
            return products.value
        }
        return products.value.filter((eachProduct) => {
            if (eachProduct.category == category) {
                return true
            }
        })
    }

    return { products, setProducts, filterCategory }
})
