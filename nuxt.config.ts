// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
    build: {
        transpile: ['gsap'],
    },
    css: ['~/assets/styles/sweetAlert2.css', '~/assets/styles/main.scss'],
})
