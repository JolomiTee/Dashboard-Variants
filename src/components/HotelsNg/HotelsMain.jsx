import React from 'react'
import HotelsNavbar from './HotelsNavbar'
import HotelsDashboard from './HotelsDashboard'

const HotelsMain = ({activeMenu, setActiveMenu}) => {
  return (
    <main className='bg-damostik-main-bg-grey p-0 dark:bg-dark-mode relative w-full h-screen overflow-scroll'>
        <HotelsNavbar
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
        />
        <HotelsDashboard />
    </main>
  )
}

export default HotelsMain