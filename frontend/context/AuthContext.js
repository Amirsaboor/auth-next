'use client'

import { me } from "@/actions/auth"
import { useEffect, useState } from "react"
import { createContext } from "react"

const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const loginContext = (user) => {
        setUser(user)
    }


    useEffect(() => {
        const checkUserLogin = async () => {
            const data = await me()
            if (data?.error) {
                console.log(data.error);
                setUser(null)
            } else {
                setUser(data?.user)
            }
        }
        checkUserLogin()

    }, [])
    return (
        <AuthContext.Provider value={{ user, loginContext }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext