import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Auth0Provider
                domain={import.meta.env.VITE_AUTH0_DOMAIN}
                clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
                authorizationParams={{
                    // redirect_uri: window.location.origin,
                    redirect_uri: "http://localhost:3000/login",
                    audience: `https://${import.meta.env.VITE_AUTH0_DOMAIN}/api/v2/`,
                    scope: "read:current_user update:current_user_metadata",
                }}
            >
                <AuthContextProvider>
                    <App />
                </AuthContextProvider>
            </Auth0Provider>
        </BrowserRouter>
    </React.StrictMode>,
);
