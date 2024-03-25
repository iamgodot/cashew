import { useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { useAuthContext } from "../contexts/AuthContext"
import Sidebar from "@/components/Sidebar"
import Container from "@/components/chat/Container"
import useLogin from "@/hooks/useLogin"
import { Skeleton } from "@/components/ui/skeleton"
import { TypeAnimation } from "react-type-animation"
import { Button } from "@/components/ui/button"

const Home = () => {
    const { isAuthenticated, loginWithRedirect } = useAuth0()
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

    if (authUser)
        return (
            <div className="flex items-center justify-center border border-gray-300 rounded-lg overflow-hidden h-2/3 w-3/4 2xl:w-1/2">
                <Sidebar />
                <Container />
            </div>
        )
    return (
        <div>
            <div className="flex justify-center mb-5">
                <h1 className="font-bold text-5xl font-serif">
                    Make chat simple again
                </h1>
            </div>
            <div className="flex justify-center text-xl font-serif">
                <TypeAnimation
                    sequence={[
                        "Cashew supports Google/GitHub login",
                        1000,
                        "Cashew supports real-time messaging",
                        1000,
                        "Cashew supports online status display",
                        1000,
                        "Cashew supports contact list search",
                        1000,
                        "Cashew is built with React, TailwindCSS and Shadcn UI",
                        1000,
                        "Cashew is built with Express, MongoDB and Mongoose",
                        1000,
                        "Cashew is built with Auth0 and Socket.io",
                        1000,
                    ]}
                    speed={10}
                    repeat={Infinity}
                />
            </div>
            <div className="flex justify-center mt-20">
                <Button
                    size="lg"
                    variant="default"
                    onClick={async () => await loginWithRedirect()}
                >
                    <span className="text-xl font-serif">Get started</span>
                </Button>
            </div>
        </div>
    )
}

export default Home
