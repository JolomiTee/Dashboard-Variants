import React, {useState, useEffect} from 'react'
import HotelsMenu from './HotelsMenu'
import HotelMain from './HotelsMain'

const Index = () => {
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
            {activeMenu &&
                <HotelsMenu
                    screenSize={screenSize}
                    activeMenu={activeMenu} setActiveMenu={setActiveMenu}
                />
            }

            <HotelMain
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
            />
        </div>
  )
}

export default Index