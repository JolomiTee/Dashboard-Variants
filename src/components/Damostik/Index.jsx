import React, {useState, useEffect} from 'react'
import DamostikMenu from './DamostikMenu'
import DamostikMain from './DamostikMain'

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
                <DamostikMenu
                    screenSize={screenSize}
                    activeMenu={activeMenu} setActiveMenu={setActiveMenu}
                />
            }

            <DamostikMain
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
            />
        </div>
  )
}

export default Index