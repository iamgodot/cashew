import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const Login = () => {
    const { user, getAccessTokenSilently } = useAuth0();
    const { setAuthUser } = useAuthContext();
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = await getAccessTokenSilently({
                    authorizationParams: {
                        audience: `https://${import.meta.env.VITE_AUTH0_DOMAIN}/api/v2/`,
                        scope: "read:current_user",
                    },
                });
                const resp = await fetch("/api/auth/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ sub: user.sub, accessToken }),
                });
                const userData = await resp.json();
                setAuthUser(userData);
                navigate("/");
            } catch (e) {
                console.log(e.message);
            }
        };
        if (user) {
            fetchData();
        }
    }, [user, setAuthUser, getAccessTokenSilently, navigate]);
    return (
        <div className="flex items-center justify-center pt-8">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Logging in...
        </div>
    );
};

export default Login;
