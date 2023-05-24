import { createContext, useContext, useState } from "react";

const BlokContext = createContext();

export const BlokContextProvider = ({children}) => {
    const [currentMenu, setCurrentMenu] = useState('Dashboard')

    return (
        <BlokContext.Provider
            value={{
                currentMenu, setCurrentMenu
            }}
        >
            {children}
        </BlokContext.Provider>
    )
}

export const useBlokContext = () => useContext(BlokContext)