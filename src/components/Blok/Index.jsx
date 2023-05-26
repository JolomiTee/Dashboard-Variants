import BlokMenu from './BlokMenu'
import BlokMain from './BlokMain'
import { useState, useEffect } from 'react'
import { useBlokContext } from '../../context/BlokContext'

const Index = () => {
    const [screenSize, setScreenSize] = useState(undefined)
    const [activeMenu, setActiveMenu] = useState(true)
    const { appTheme } = useBlokContext()

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)
        window.addEventListener('resize', handleResize)

        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        if (screenSize <= 1023) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true)
        }

    }, [screenSize])
    return (
        <div className={`flex ${appTheme === 'dark' ? 'dark' : ''}`}>
            {activeMenu &&
                <BlokMenu
                    screenSize={screenSize}
                    activeMenu={activeMenu} setActiveMenu={setActiveMenu}
                />
            }

            <BlokMain
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
            />
        </div>
    )
}

export default Index