import React from 'react'
import BlokNavbar from './BlokNavbar'
import BlokDashboard from './BlokDashboard'

const BlokMain = ({activeMenu, setActiveMenu}) => {
  return (
    <main className='bg-white w-full'>
        <BlokNavbar
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
        />
        <BlokDashboard />
    </main>
  )
}

export default BlokMain