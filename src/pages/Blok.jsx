import React from 'react'
import '../assets/Blok/Blok.css'
import BlokMenu from '../components/Blok/BlokMenu'
import BlokMain from '../components/Blok/BlokMain'

const Blok = () => {

    return (
        <div className='flex'>
            <BlokMenu />
            <BlokMain />
        </div>

    )
}

export default Blok