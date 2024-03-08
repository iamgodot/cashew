import { useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { useAuthContext } from "../contexts/AuthContext"
import Sidebar from "@/components/Sidebar"
import Container from "@/components/chat/Container"
import { Loader2 } from "lucide-react"
import useLogin from "@/hooks/useLogin"

const Home = () => {
    const { isAuthenticated } = useAuth0()
    const { authUser, setAuthUser } = useAuthContext()
    const { login, loading } = useLogin()

    useEffect(() => {
        if (isAuthenticated) {
            login()
        } else {
            setAuthUser(null)
            console.log("Set null")
        }
    }, [isAuthenticated, setAuthUser]) //FIXME: why login will keep invoking effect

    if (loading)
        return (
            <div className="flex items-center justify-center pt-8">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
            </div>
        )

    return (
        <div className="flex items-center justify-center border border-gray-300 rounded-lg overflow-hidden h-2/3 w-3/4">
            {authUser ? (
                <>
                    <Sidebar />
                    <Container />
                </>
            ) : (
                <h3>Landing page</h3>
            )}
        </div>
    )
}

export default Home
