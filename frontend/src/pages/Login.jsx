import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { user, loginWithRedirect, getAccessTokenSilently } = useAuth0();
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
    }, [user]);
    return (
        <div>
            <button onClick={async () => await loginWithRedirect()}>
                Login here
            </button>
        </div>
    );
};

export default Login;
