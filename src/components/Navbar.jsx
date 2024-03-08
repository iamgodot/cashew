import { LogIn, LogOut, Nut } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useAuth0 } from "@auth0/auth0-react"
import { useAuthContext } from "@/contexts/AuthContext"

const Navbar = () => {
    const { loginWithRedirect, logout } = useAuth0()
    const { authUser } = useAuthContext()
    return (
        <nav className="h-12 inset-x-0 z-30 w-full bg-gray-100 backdrop-blur-lg transition-all">
            <div className="flex items-center justify-between h-12 px-3 border-b border-zinc-200">
                <Link
                    to=""
                    className="flex items-center font-semibold text-lg text-cashew"
                >
                    <Nut color="black" className="mr-3" />
                    <span>Cashew - chat anywhere, anytime</span>
                </Link>
                {authUser ? (
                    <Button
                        variant="default"
                        size="sm"
                        onClick={() =>
                            logout({
                                logoutParams: {
                                    returnTo: window.location.origin,
                                },
                            })
                        }
                    >
                        <LogOut className="mr-2 h-4 w-4" /> Logout
                    </Button>
                ) : (
                    <Button
                        size="sm"
                        onClick={async () => await loginWithRedirect()}
                    >
                        <LogIn className="mr-2 h-4 w-4" /> Login
                    </Button>
                )}
            </div>
        </nav>
    )
}

export default Navbar
