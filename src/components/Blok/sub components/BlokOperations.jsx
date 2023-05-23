import React from 'react'

const BlokOperations = () => {
  return (
    <div className=' w-mxl:flex xl:w-full xl:max-w-[430px] border border-blok-color rounded-16 p-4'>
        <div className="flex flex-col gap-3 md:flex-row md:justify-start xl:justify-between">
            <p className='text-[20px] text-blok-dark font-cabinet font-bold'>Operations</p>

            <div className='flex border border-blok-color justify-between px-2 py-1 rounded-8 text-12 text-blok-grey bg-[#f6f6f6] max-w-fit'>
                <button className='bg-white px-5 py-2 text-blok-dark rounded-8'>Buy</button>
                <button className='px-5 py-1'>Sell</button>
                <button className='px-5 py-1'>Exchange</button>
            </div>
        </div>
    </div>
  )
}

export default BlokOperations