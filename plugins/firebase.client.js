import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

export default defineNuxtPlugin((nuxtApp) => {
    const firebaseConfig = {
        apiKey: 'AIzaSyBBNzhffAocOnBGGL24x0snZcR_iGJKjjg',
        authDomain: 'nuxt-e-shop.firebaseapp.com',
        projectId: 'nuxt-e-shop',
        storageBucket: 'nuxt-e-shop.appspot.com',
        messagingSenderId: '566838013380',
        appId: '1:566838013380:web:77a0c890ad6c5f523f8891',
        measurementId: 'G-2QTL7BPH9H',
    }

    // Initialize Firebase
    const app = initializeApp(firebaseConfig)
    const analytics = getAnalytics(app)
    const auth = getAuth(app)
    const firestore = getFirestore(app)

    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)

    nuxtApp.vueApp.provide('firestore', firestore)
    nuxtApp.provide('firestore', firestore)
})
