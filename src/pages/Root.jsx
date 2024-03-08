import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default Root;
