import React from 'react'
import ChevronRight from '../../../assets/Blok/images/ChevronFilledRight.svg'
import { BlokTransactionsData } from '../../../assets/Blok/data'
import TransactionItems from './TransactionItems'

const BlokTransactions = () => {
    return (
        <div className='border border-blok-color p-4 rounded-16 lg:w-[300px] xl:min-w-[390px] xl:mt-10'>

            <div className="flex justify-between items-center md:gap-[60px] mb-5">
                <p className='text-[20px] text-blok-dark font-cabinet font-bold'>Transaction</p>
                <span className='text-14 w-max text-blok-grey flex'>See more <img src={ChevronRight} alt="" /></span>
            </div>

            <div className="grid gap-5">
                {
                    BlokTransactionsData.map((data, index) => {
                        const { increase, type, symbol, date, cryptocurrencyValue, marketValue } = data;
                        return (
                            <TransactionItems
                                key={index}
                                increase={increase}
                                type={type}
                                symbol={symbol}
                                date={date}
                                cryptocurrencyValue={cryptocurrencyValue}
                                marketValue={marketValue}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BlokTransactions