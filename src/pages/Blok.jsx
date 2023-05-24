import '../assets/Blok/Blok.css'
import BlokMenu from '../components/Blok/BlokMenu'
import BlokMain from '../components/Blok/BlokMain'
import { useState, useEffect } from 'react'
import { BlokContextProvider } from '../context/BlokContext'

const Blok = () => {
    const [screenSize, setScreenSize] = useState(undefined)
    const [activeMenu, setActiveMenu] = useState(true)

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
        <BlokContextProvider>
            <div className='flex'>
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
        </BlokContextProvider>
    )
}

export default Blok
