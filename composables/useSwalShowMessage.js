export default function () {
    const { $swal } = useNuxtApp()

    const schema = {
        'auth/email-already-in-use': '此email已被註冊',
        'auth/invalid-email': '錯誤的email格式',
        'auth/weak-password': '密碼長度至少8個字元',
        'auth/wrong-password': '密碼錯誤',
        'auth/user-not-found': '此email尚未註冊',
    }
    const showErrorMessage = (errorMessage) => {
        const condition = Object.keys(schema).find((item) => String(errorMessage).includes(item))
        $swal.fire({
            icon: 'error',
            title: condition ? schema[condition] : '發生錯誤',
        })
    }

    return {
        showErrorMessage,
    }
}
