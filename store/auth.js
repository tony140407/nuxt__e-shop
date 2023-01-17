import { defineStore } from 'pinia'

// export const useAuthStore = defineStore('auth', {
//     id: 'auth',
//     state: () => {
//         return {
//             auth: null,
//         }
//     },
//     actions: {
//         setAuth(_user) {
//             this.auth = _user
//         },
//     },
//     persist: true,
// })

export const useAuthStore = defineStore('auth', {
    state: () => ({ auth: null }),
    actions: {
        setAuth(_user) {
            this.auth = _user
        },
    },
    persist: true,
})
