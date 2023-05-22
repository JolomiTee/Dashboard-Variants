import React from 'react'
import BlokNavbar from './BlokNavbar'
import BlokDashboard from './BlokDashboard'

const BlokMain = () => {
  return (
    <main className='flex flex-col bg-white'>
        <BlokNavbar />
        <BlokDashboard />
    </main>
  )
}

export default BlokMain