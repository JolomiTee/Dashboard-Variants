import React from 'react'
import BlokNavbar from './BlokNavbar'
import BlokDashboard from './BlokDashboard'

const BlokMain = () => {
  return (
    <main className='flex flex-col flex-wrap bg-white w-full'>
        <BlokNavbar />
        <BlokDashboard />
    </main>
  )
}

export default BlokMain