'use client';
import axios from "axios";
import { useState, createContext, useContext, useEffect, useLayoutEffect } from "react";


const UserContext = createContext<any | null>(null);

export function useAuth() {
    return useContext(UserContext);
}


export function UserProvider({ children }: {
    children: React.ReactNode
}) {
    const [user, setUser] = useState({})

    useLayoutEffect(() => {
        getUserDetails()
    }, [])

    const getUserDetails = async () => {
        const { data } = await axios.get('/api/users/me')
        console.log(data);
        setUser(data.data)
    }

    return (
        <UserContext.Provider value={{ user, getUserDetails }}>
            {children}
        </UserContext.Provider>
    );
}



