import { createContext, useContext, useState } from "react";

const DamostikContext = createContext();

export const DamostikContextProvider = ({children}) => {
    const [appTheme, setAppTheme] = useState('light')
    localStorage.setItem('appTheme', appTheme)
    const [currentMenu, setCurrentMenu] = useState('Dashboard')


    return (
        <DamostikContext.Provider
            value={{
                currentMenu, setCurrentMenu,
            }}
        >
            {children}
        </DamostikContext.Provider>
    )
}

export const useDamostikContext = () => useContext(DamostikContext)