export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        const { user } = useFirebaseAuth()
        console.log(user.value)
        if (!user.value) {
            return navigateTo('/login')
        }
    }
})
