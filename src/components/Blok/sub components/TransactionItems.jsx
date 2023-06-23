import React from 'react'
import UpArrow from '../../../assets/Blok/images/arrow-up.svg'
import DownArrow from '../../../assets/Blok/images/arrow-down.svg'


const TransactionItems = ({ increase, type, symbol, date, cryptocurrencyValue, marketValue }) => {
    return (
        <div className="flex gap-3">
            <span className={`${increase ? 'bg-[#EFF7F4]' : 'bg-[#FEEEF1]'} flex justify-center items-center p-1 h-fit rounded-8`}>
                <img src={increase ? UpArrow : DownArrow} className='w-8 h-8' alt="" />
            </span>
            <div className="grid sm:flex sm:justify-between sm:flex-grow sm:gap-3">
                <div>
                    <span className='text-blok-dark font-cabinet font-bold dark:text-white'>{type}</span>
                    <p className='text-blok-grey text-14 font-medium'>{date}</p>

                </div>
                <div className="flex sm:grid">
                    <span className='text-blok-dark font-cabinet font-bold dark:text-white'>{cryptocurrencyValue}&nbsp;{symbol}</span>

                    <span className='sm:hidden'>&nbsp;~&nbsp;</span>

                    <p className='text-blok-grey text-14 font-medium'>${marketValue}</p>
                </div>
            </div>

        </div>
    )
}

export default TransactionItems