import { useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { useAuthContext } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import Sidebar from "@/components/Sidebar"
import Container from "@/components/message/Container"
import { Loader2 } from "lucide-react"

const Home = () => {
    const { isAuthenticated, isLoading } = useAuth0()
    const { authUser, setAuthUser } = useAuthContext()

    const navigate = useNavigate()

    useEffect(() => {
        //TODO: should set authUser again after refreshing the page
        if (!authUser || !isAuthenticated) {
            // setAuthUser(null);
        }
    }, [isAuthenticated, authUser, setAuthUser, navigate])

    if (isLoading)
        return (
            <div className="flex items-center justify-center pt-8">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
            </div>
        )

    return (
        <div className="flex items-center justify-center border border-gray-300 rounded-lg overflow-hidden h-2/3 w-3/4">
            {/* {authUser ? ( */}
            {isAuthenticated ? (
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
