import { createContext, useContext, useState } from "react";

const HotelsContext = createContext();

export const HotelsContextProvider = ({children}) => {
    const [appTheme, setAppTheme] = useState('light')
    localStorage.setItem('appTheme', appTheme)
    const [currentMenu, setCurrentMenu] = useState('Dashboard')
    const [currentRange, setCurrentRange] = useState('3HRS')


    return (
        <HotelsContext.Provider
            value={{
                currentMenu, setCurrentMenu,
                currentRange, setCurrentRange,
                appTheme, setAppTheme,
            }}
        >
            {children}
        </HotelsContext.Provider>
    )
}

export const useHotelsContext = () => useContext(HotelsContext)