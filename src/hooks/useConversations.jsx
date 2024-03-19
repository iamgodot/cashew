import { useState, useEffect } from "react"
import { toast } from "@/components/ui/use-toast"
import { useAuthContext } from "@/contexts/AuthContext"

const useConversations = () => {
    const [loading, setLoading] = useState(false)
    const [conversations, setConversations] = useState([])
    const { accessToken } = useAuthContext()

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true)
            try {
                const resp = await fetch("/api/users", {
                    headers: { Authorization: `Bearer ${accessToken}` },
                })
                const data = await resp.json()
                setConversations(data)
            } catch (e) {
                toast({
                    variant: "destructive",
                    title: "Un oh! Something went wrong.",
                    description: e.message,
                })
                console.log(e.message)
            } finally {
                setLoading(false)
            }
        }
        getConversations()
    }, [accessToken])
    return { loading, conversations }
}

export default useConversations
