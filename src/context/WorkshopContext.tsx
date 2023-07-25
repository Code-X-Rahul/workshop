'use client';
import { useState, createContext, useContext } from "react";

const WorkshopContext = createContext<any | null>(null);

export function useWorkshop() {
    return useContext(WorkshopContext);
}


export function WorkshopProvider({ children }: {
    children: React.ReactNode
}) {
    const [workshops, setWorkshops] = useState([])

    return (
        <WorkshopContext.Provider value={{ setWorkshops, workshops }}>
            {children}
        </WorkshopContext.Provider>
    );
}


