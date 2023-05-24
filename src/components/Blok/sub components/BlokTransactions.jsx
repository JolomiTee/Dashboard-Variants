import React from 'react'

const BlokTransactions = () => {
    return (
        <div className='border border-blok-color p-4 rounded-16 lg:w-[300px] xl:min-w-[390px] xl:mt-10'>
            <div className="flex justify-between items-center md:gap-[60px]">
                <p className='text-[20px] text-blok-dark font-cabinet font-bold'>Transaction</p>
                <span className='text-14 w-max text-blok-grey'>See more</span>
            </div>
        </div>
    )
}

export default BlokTransactions