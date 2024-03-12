import { useAuth0 } from "@auth0/auth0-react"
import { useAuthContext } from "@/contexts/AuthContext"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"

const useLogin = () => {
    const { user, getAccessTokenSilently } = useAuth0()
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()
    const login = async () => {
        try {
            setLoading(true)
            const accessToken = await getAccessTokenSilently({
                authorizationParams: {
                    audience: `https://${import.meta.env.VITE_AUTH0_DOMAIN}/api/v2/`,
                    scope: "read:current_user",
                },
            })
            const resp = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ sub: user.sub, accessToken }),
            })
            const userData = await resp.json()
            setAuthUser(userData)
        } catch (e) {
            toast({
                variant: "destructive",
                title: "Un oh! Something went wrong.",
                description: e.message,
            })
            console.log(e.message)
        } finally {
            setLoading(false)
        }
    }
    return { loading, login }
}

export default useLogin
