import React from 'react'
import SplineChart from '../charts/SplineChart'
import { useBlokContext } from '../../../context/BlokContext'
import { BlokRangeSelectors } from '../../../assets/Blok/data';

const BlokAnalytics = () => {

    const {currentRange, setCurrentRange} = useBlokContext();

    const selectRange = (e) => {
        console.log(e.target.value)
        setCurrentRange(e.target.value)
    }

    return (
        <div className='border border-blok-color p-4 rounded-16 md:flex-grow h-fit'>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center xl:justify-between xl:h-fit">
                <p className='text-[20px] text-blok-dark font-cabinet font-bold dark:text-white'>Analysis</p>

                <div className='flex border border-blok-color justify-between px-2 py-1 rounded-8 text-12 text-blok-grey bg-[#f6f6f6] max-w-fit'>
                    {
                        BlokRangeSelectors.map((button, index) => (
                            <button key={index} className={currentRange === button.range_value ? 'bg-white px-5 py-2 text-blok-dark rounded-8' : 'px-5 py-1'} value={button.range_value} onClick={selectRange}>{button.text_value}</button>
                        ))
                    }
                </div>
            </div>
            <div className="mt-10">
                {/* <SplineChart /> */}
            </div>
        </div>
    )
}

export default BlokAnalytics