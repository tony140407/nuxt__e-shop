// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxtjs/tailwindcss'],
    build: {
        transpile: ['gsap'],
    },
    plugins: [{ src: '~/plugins/font-awesome.ts' }],
    css: ['~/assets/styles/sweetAlert2.css', '~/assets/styles/main.scss'],
    runtimeConfig: {
        public: {
            VUE_APP_baseUrl: process.env.VUE_APP_baseUrl,
            VUE_APP_apiKey: process.env.VUE_APP_apiKey,
            API_KEY: process.env.API_KEY,
            AUTH_DOMAIN: process.env.AUTH_DOMAIN,
            DATABASE_URL: process.env.DATABASE_URL,
            PROJECT_ID: process.env.PROJECT_ID,
            STORAGE_BUCKET: process.env.STORAGE_BUCKET,
            MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
            APP_ID: process.env.APP_ID,
            MEASUREMENT_ID: process.env.MEASUREMENT_ID,
            ADMIN_MAIL: process.env.ADMIN_MAIL,
        },
    },
})
