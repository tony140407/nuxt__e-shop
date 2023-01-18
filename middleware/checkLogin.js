export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        const { user } = useFirebaseAuth()
        if (!user.value) {
            return navigateTo('/login')
        }
    }
})
