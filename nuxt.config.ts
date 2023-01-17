// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxtjs/tailwindcss'],
    build: {
        transpile: ['gsap'],
    },
    css: ['~/assets/styles/sweetAlert2.css', '~/assets/styles/main.scss'],
})
