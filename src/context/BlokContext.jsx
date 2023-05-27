import { createContext, useContext, useState } from "react";

const BlokContext = createContext();

export const BlokContextProvider = ({children}) => {
    const [appTheme, setAppTheme] = useState('light')
    localStorage.setItem('appTheme', appTheme)
    const [currentMenu, setCurrentMenu] = useState('Dashboard')
    const [currentRange, setCurrentRange] = useState('3HRS')
    const [currentOperation, setCurrentOperation] = useState('buy')

    return (
        <BlokContext.Provider
            value={{
                currentMenu, setCurrentMenu,
                currentRange, setCurrentRange,
                appTheme, setAppTheme,
                currentOperation, setCurrentOperation
            }}
        >
            {children}
        </BlokContext.Provider>
    )
}

export const useBlokContext = () => useContext(BlokContext)