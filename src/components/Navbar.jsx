import { LogIn, LogOut, Nut } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useAuth0 } from "@auth0/auth0-react"
import { useAuthContext } from "@/contexts/AuthContext"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"

const Navbar = () => {
    const { loginWithRedirect, logout } = useAuth0()
    const { authUser } = useAuthContext()
    return (
        <nav className="h-12 inset-x-0 z-30 w-full bg-gray-100 backdrop-blur-lg transition-all">
            <div className="flex items-center justify-between h-12 px-8 border-b border-zinc-200">
                <Link
                    to=""
                    className="flex items-center gap-2 font-semibold text-lg"
                >
                    <img
                        src="/logo.png"
                        alt="logo"
                        className="w-28 h-8 rounded-lg cursor-pointer"
                    />
                </Link>
                {authUser ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <img
                                src={authUser.profilePic}
                                alt="User"
                                className="w-8 h-8 rounded-full cursor-pointer"
                            />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem
                                    onSelect={() =>
                                        logout({
                                            logoutParams: {
                                                returnTo:
                                                    window.location.origin,
                                            },
                                        })
                                    }
                                >
                                    <LogOut className="mr-2 h-4 w-4" />{" "}
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <div className="font-serif">
                        <Button
                            size="sm"
                            onClick={async () => await loginWithRedirect()}
                        >
                            <LogIn className="mr-2 h-4 w-4" /> Login
                        </Button>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
