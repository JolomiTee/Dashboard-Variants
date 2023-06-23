import React from 'react'
import { HotelsContextProvider } from '../context/HotelsContext'
import Index from '../components/HotelsNg/Index'

const HotelsNg = () => {
  return (
    <HotelsContextProvider>
        <Index />
    </HotelsContextProvider>
  )
}

export default HotelsNg