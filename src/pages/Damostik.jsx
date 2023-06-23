import React from 'react'
import Index from '../components/Damostik/Index'
import { DamostikContextProvider } from '../context/DamostikContext'

const Damostik = () => {
  return (
    <DamostikContextProvider>
        <Index />
    </DamostikContextProvider>
  )
}

export default Damostik