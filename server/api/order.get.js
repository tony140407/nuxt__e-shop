export default defineEventHandler(async () => {
    const data = await $fetch(
        `${process.env.VUE_APP_baseUrl}/api/${process.env.VUE_APP_apiPath}/orders`,
    )
    return data
})
