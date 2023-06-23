import { DamostikContextProvider } from '../context/DamostikContext'
import '../assets/Damostik/Damostik.css'
import Index from '../components/Damostik/Index'

const Damostik = () => {
  return (
    <DamostikContextProvider>
        <Index />
    </DamostikContextProvider>
  )
}

export default Damostik