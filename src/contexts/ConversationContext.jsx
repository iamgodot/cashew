import { createContext, useContext, useState } from "react"

export const ConversationContext = createContext()

export const useConversationContext = () => {
    return useContext(ConversationContext)
}

export const ConversationContextProvider = ({ children }) => {
    const [currentConversation, setCurrentConversation] = useState(null)
    const [currentMessages, setCurrentMessages] = useState([])
    return (
        <ConversationContext.Provider
            value={{
                currentConversation,
                setCurrentConversation,
                currentMessages,
                setCurrentMessages,
            }}
        >
            {children}
        </ConversationContext.Provider>
    )
}
