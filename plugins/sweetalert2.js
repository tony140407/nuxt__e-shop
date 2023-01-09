import Swal from 'sweetalert2'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('swal', Swal)
})

// example usage in setup
// const { $swal } = useNuxtApp()
// $swal.fire({
//     title: 'Error!',
//     text: 'Do you want to continue',
//     icon: 'error',
//     confirmButtonText: 'Cool',
// })
