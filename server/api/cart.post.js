export const apiAddCart = (data) => axios.post(`${api}/api/${path}/cart`, data)

export default defineEventHandler(async (data) => {
    const response = await $fetch(
        `${process.env.VUE_APP_baseUrl}/api/${process.env.VUE_APP_apiPath}/cart`,
        {
            method: 'POST',
            body: JSON.stringify(data),
        },
    )
    return response
})
