export default defineEventHandler(async (event) => {
    const { id } = event.context.params
    const data = await readBody(event)
    const response = await $fetch(
        `${process.env.VUE_APP_baseUrl}/api/${process.env.VUE_APP_apiPath}/cart/${id}`,
        {
            method: 'PUT',
            body: JSON.stringify(data),
        },
    )
    return response
})
