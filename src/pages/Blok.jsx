import { BlokContextProvider } from '../context/BlokContext'
import '../assets/Blok/Blok.css'
import Index from '../components/Blok/Index'

const Blok = () => {
    return (
        <BlokContextProvider>
            <Index />
        </BlokContextProvider>
    )
}

export default Blok
