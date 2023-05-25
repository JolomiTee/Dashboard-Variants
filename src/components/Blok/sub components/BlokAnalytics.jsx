import React from 'react'
import AnalysisGraph from '../../../assets/Blok/images/AnalysisGraph.svg'
import SplineChart from '../charts/SplineChart'

const BlokAnalytics = () => {
    return (
        <div className='border border-blok-color p-4 rounded-16 md:flex-grow h-fit'>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center xl:justify-between xl:h-fit">
                <p className='text-[20px] text-blok-dark font-cabinet font-bold'>Analysis</p>

                <div className='flex border border-blok-color justify-between px-2 py-1 rounded-8 text-12 text-blok-grey bg-[#f6f6f6] max-w-fit'>
                    <button className='bg-white px-5 py-2 text-blok-dark rounded-8'>1D</button>
                    <button className='px-5 py-1'>7D</button>
                    <button className='px-5 py-1'>1M</button>
                    <button className='px-5 py-1'>2M</button>
                    <button className='px-5 py-1 hidden sm:block'>ALL</button>
                </div>
            </div>
            <div className="mt-10">
                {/* <img src={AnalysisGraph} alt="analysis graph" className='w-full' /> */}
                <SplineChart />
            </div>
        </div>
    )
}

export default BlokAnalytics