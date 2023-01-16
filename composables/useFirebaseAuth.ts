import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User } from 'firebase/auth'

export default function () {
    const { $auth, $sha256 } = useNuxtApp()

    const user = useState<User | null>('fb_user', () => null)

    const registerUser = async (email: string, password: string): Promise<boolean> => {
        try {
            const userCreds = await createUserWithEmailAndPassword($auth, email, $sha256(password))
            if (userCreds) {
                user.value = userCreds.user
                return true
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                // handle error
                console.error(error)
            }
            return false
        }
        return false
    }
    const signInByEmail = async (email: string, password: string): Promise<boolean> => {
        try {
            const _user = await signInWithEmailAndPassword($auth, email, $sha256(password))
            console.log(_user)
            if (_user) {
                user.value = _user.user
                return true
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                // handle error
                console.error(error)
            }
            return false
        }
        return false
    }

    return {
        user,
        registerUser,
        signInByEmail,
    }
}
