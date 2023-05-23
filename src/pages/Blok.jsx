import React from 'react'
import '../assets/Blok/Blok.css'
import BlokMenu from '../components/Blok/BlokMenu'
import BlokMain from '../components/Blok/BlokMain'
import { useState, useEffect } from 'react'


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
        <div className='flex'>
            {activeMenu && <BlokMenu setActiveMenu={setActiveMenu} />}

            <BlokMain activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        </div>

    )
}

export default Blok
