import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();


export const ContextProvider = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [isClicked, setIsClicked] = useState(initialState);
	const [screenSize, setScreenSize] = useState(undefined);
	const [currentColor, setCurrentColor] = useState("#03C9D7");
	const [currentMode, setCurrentMode] = useState("Light");
	const [themeSettings, setThemeSettings] = useState(false);


	return (
		<StateContext.Provider
			value={{
				currentColor, setColor, setCurrentColor,
				currentMode, setMode, setCurrentMode,
				activeMenu, setActiveMenu,
				screenSize, setScreenSize,
				themeSettings, setThemeSettings,
				initialState, handleClick,
				isClicked, setIsClicked,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
