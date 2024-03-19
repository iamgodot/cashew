import { createContext, useContext, useState } from "react"

export const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null)
    const [accessToken, setAccessToken] = useState(null)
    return (
        <AuthContext.Provider
            value={{ authUser, setAuthUser, accessToken, setAccessToken }}
        >
            {children}
        </AuthContext.Provider>
    )
}
