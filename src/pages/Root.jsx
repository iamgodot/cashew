import Navbar from "@/components/Navbar"
import { Toaster } from "@/components/ui/toaster"
import { Outlet } from "react-router-dom"

const Root = () => {
    return (
        <main className="h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-center justify-center overflow-hidden">
                <Outlet />
            </div>
            <Toaster />
        </main>
    )
}

export default Root
