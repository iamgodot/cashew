import Navbar from "@/components/Navbar"
import { Outlet } from "react-router-dom"

const Root = () => {
    return (
        <main className="h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-center justify-center">
                <Outlet />
            </div>
        </main>
    )
}

export default Root
