import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    User,
} from 'firebase/auth'

export default function () {
    const { showErrorMessage } = useSwalShowMessage()
    const { $auth, $sha256, $swal } = useNuxtApp()
    const user = useState<User | null>('fb_user', () => null)

    const registerUser = async (email: string, password: string): Promise<boolean> => {
        try {
            const userCreds = await createUserWithEmailAndPassword($auth, email, $sha256(password))
            console.log(userCreds)
            if (userCreds) {
                user.value = userCreds.user
                navigateTo('/login')
                return true
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(error)
                showErrorMessage(error)
            }
            return false
        }
        return false
    }
    const signInByEmail = async (email: string, password: string): Promise<boolean> => {
        try {
            const _user = await signInWithEmailAndPassword($auth, email, $sha256(password))
            if (_user) {
                user.value = _user.user
                navigateTo('/shop')
                return true
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(error)
                showErrorMessage(error)
            }
            return false
        }
        return false
    }
    const userSignOut = async () => {
        try {
            await signOut($auth)
            user.value = null
            $swal
                .fire({
                    title: 'Success',
                    text: '你已成功登出',
                    icon: 'success',
                })
                .then(() => {
                    navigateTo('/')
                })
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(error)
                showErrorMessage(error)
            }
            return false
        }
        return false
    }

    return {
        user,
        registerUser,
        signInByEmail,
        userSignOut,
    }
}
