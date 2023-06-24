import React, {useState} from 'react'
import ReservationChart from '../charts/ReservationChart'

const ReservationAnalytics = () => {
    const period = ['Daily', 'Weekly', 'Monthly', 'Yearly']
    const [timePeriod, setTimePeriod] = useState('Yealy')
    return (
        <div className="grid w-full gap-3">
            <div className='flex justify-between'>
                <h4 className='text-[22px] text-hotels-letter-black1'>Reservation Analytics</h4>
                <div className="flex gap-3">
                    {period.map((item, index) => (
                        <button onClick={() => {setTimePeriod(item)}} key={index} className={`${item === timePeriod ? 'bg-hotels-black' : ''} text-white font-visuelt-pro flex gap-3 h-[36px] items-center justify-center px-3 rounded-4`}>{item}</button>
                    ))}
                </div>

            </div>
            <ReservationChart />
        </div>
  )
}

export default ReservationAnalytics