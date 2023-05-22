import React from 'react'
import BlokNavbar from './BlokNavbar'
import BlokDashboard from './BlokDashboard'

const BlokMain = () => {
  return (
    <div className='flex flex-col'>
        <BlokNavbar />
        <BlokDashboard />
    </div>
  )
}

export default BlokMain