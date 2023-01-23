export default defineEventHandler(async (event) => {
    const { id } = event.context.params
    const response = await $fetch(
        `${process.env.VUE_APP_baseUrl}/api/${process.env.VUE_APP_apiPath}/cart/${id}`,
        {
            method: 'DELETE',
        },
    )
    return response
})
