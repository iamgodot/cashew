import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { isAuthenticated, isLoading, logout } = useAuth0();
    const { authUser, setAuthUser } = useAuthContext();

    const navigate = useNavigate();

    useEffect(() => {
        if (!authUser || !isAuthenticated) {
            setAuthUser(null);
            navigate("/login");
        }
    }, [isAuthenticated, authUser]);

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <h2>Homepage</h2>
            <h3>{authUser?.nickname}</h3>
            <div>
                <button
                    onClick={() =>
                        logout({ logoutParams: { returnTo: window.location.origin } })
                    }
                >
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default Home;
