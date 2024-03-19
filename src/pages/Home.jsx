import { useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { useAuthContext } from "../contexts/AuthContext"
import Sidebar from "@/components/Sidebar"
import Container from "@/components/chat/Container"
import useLogin from "@/hooks/useLogin"
import { Skeleton } from "@/components/ui/skeleton"

const Home = () => {
    const { isAuthenticated } = useAuth0()
    const { authUser, setAuthUser, setAccessToken } = useAuthContext()
    const { login, loading } = useLogin()

    useEffect(() => {
        if (isAuthenticated) {
            login()
        } else {
            setAuthUser(null)
            setAccessToken(null)
        }
    }, [isAuthenticated, setAuthUser, setAccessToken])

    if (loading)
        return (
            <div className="flex items-center space-x-4">
                <Skeleton className="h-[416px] w-[100px] rounded-lg" />
                <div className="flex flex-col space-y-4">
                    <Skeleton className="h-[100px] w-[500px] rounded-lg" />
                    <Skeleton className="h-[300px] w-[500px] rounded-lg" />
                </div>
            </div>
        )

    return (
        <div className="flex items-center justify-center border border-gray-300 rounded-lg overflow-hidden h-2/3 w-3/4 2xl:w-1/2">
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
