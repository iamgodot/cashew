import React from "react"
import ReactDOM from "react-dom/client"
import { Auth0Provider } from "@auth0/auth0-react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { AuthContextProvider } from "./contexts/AuthContext"
import { ConversationContextProvider } from "./contexts/ConversationContext"
import "./index.css"
import Error from "./pages/Error"
import Home from "./pages/Home"
import Root from "./pages/Root"
import { SocketContextProvider } from "./contexts/SocketContext"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "",
                element: <Home />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Auth0Provider
            domain={import.meta.env.VITE_AUTH0_DOMAIN}
            clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
            authorizationParams={{
                redirect_uri: "http://localhost:3000",
                audience: `https://${import.meta.env.VITE_AUTH0_DOMAIN}/api/v2/`,
                scope: "read:current_user update:current_user_metadata",
            }}
        >
            <AuthContextProvider>
                <ConversationContextProvider>
                    <SocketContextProvider>
                        <RouterProvider router={router}></RouterProvider>
                    </SocketContextProvider>
                </ConversationContextProvider>
            </AuthContextProvider>
        </Auth0Provider>
    </React.StrictMode>
)
