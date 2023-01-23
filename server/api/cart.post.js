export default defineEventHandler(async (event) => {
    const data = await readBody(event)
    const response = await $fetch(
        `${process.env.VUE_APP_baseUrl}/api/${process.env.VUE_APP_apiPath}/cart`,
        {
            method: 'POST',
            body: JSON.stringify(data),
        },
    )
    return response
})
