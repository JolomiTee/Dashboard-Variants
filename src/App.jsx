import React from 'react'
import {Blok, Damostik, HotelsNg, Joules} from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<Blok />} />
            <Route path='damostik' exact element={<Damostik />} />
            <Route path='hotelsng' exact element={<HotelsNg />} />
            <Route path='joules' exact element={<Joules />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App