import React from 'react'
import DamostikNavbar from './DamostikNavbar'
import DamostikDashboard from './DamostikDashboard'

const DamostikMain = ({activeMenu, setActiveMenu}) => {
  return (
    <main className='bg-white dark:bg-dark-mode relative w-full h-screen overflow-scroll'>
        <DamostikNavbar
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
        />
        <DamostikDashboard />
    </main>
  )
}

export default DamostikMain