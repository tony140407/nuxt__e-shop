import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    User,
} from 'firebase/auth'
import { auth, useAuthStore } from '~/store/auth'
export default function () {
    const { auth, setAuth } = useAuthStore()
    const { showErrorMessage } = useSwalShowMessage()
    const { $auth, $sha256, $swal } = useNuxtApp()
    const user = useState<User | null>('fb_user', () => null)

    const registerUser = async (email: string, password: string): Promise<boolean> => {
        try {
            const userCreds = await createUserWithEmailAndPassword($auth, email, $sha256(password))
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
                setAuth(_user.user)
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
            setAuth(null)
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
    const persistUser = () => {
        if (auth) {
            user.value = auth
        }
    }

    return {
        user,
        registerUser,
        signInByEmail,
        userSignOut,
        persistUser,
    }
}
