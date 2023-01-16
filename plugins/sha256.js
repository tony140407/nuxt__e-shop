import sha256 from 'sha256'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('sha256', sha256)
})
