import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import Container from "@/components/message/Container";
import { Loader2 } from "lucide-react";

const Home = () => {
    const { isAuthenticated, isLoading } = useAuth0();
    const { authUser, setAuthUser } = useAuthContext();

    const navigate = useNavigate();

    useEffect(() => {
        if (!authUser || !isAuthenticated) {
            setAuthUser(null);
        }
    }, [isAuthenticated, authUser, setAuthUser, navigate]);

    if (isLoading)
        return (
            <div className="flex items-center justify-center pt-8">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
            </div>
        );

    return (
        <div className="p-4 h-screen flex items-center justify-center">
            {authUser ? (
                <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                    <Sidebar />
                    <Container />
                </div>
            ) : (
                <h3>Landing page</h3>
            )}
        </div>
    );
};

export default Home;
