import React from 'react'
import { BlokCoinOverview } from '../../../assets/Blok/data'
import StockIncrease from '../../../assets/Blok/images/arrow-up.svg'
import StockDecrease from '../../../assets/Blok/images/arrow-down.svg'


const CoinsOverview = () => {
    return (
        <div className="flex flex-wrap lg:flex-nowrap lg:w-full gap-5 xl:gap-8 justify-center">
            {
                BlokCoinOverview.map((item, index) => (
                    <div key={index} className="border rounded-16 p-3 flex flex-col gap-2 xl:gap-4">
                        <div className='font-bold font-cabinet text-blok-dark'>
                            <p className='text-[20px] xl:text-24'>{item.amount}{item.cryptocurrency}</p>
                            <span className='text-14 leading-[19px]'>$4,9000</span>
                        </div>
                        <div className="">
                            <img src={item.graph} alt="" />
                        </div>
                        <div className="flex gap-2">
                            <div className="">
                                <img src={item.cryptocurrencyImage} alt="" className='w-[40px] h-[40px]' />
                            </div>
                            <div className="flex flex-col">
                                <p className='font-bold font-cabinet text-blok-dark'>{item.pair}</p>
                                <p
                                    className={`leading-[10px] flex items-center
                                    ${item.determine ? 'text-blok-rate-green' : 'text-blok-rate-red'}`}
                                >
                                    {item.determine ?
                                        (<img src={StockIncrease} />) :
                                        (<img src={StockDecrease} />)
                                    }
                                    {item.stock}%
                                </p>
                            </div>
                        </div>
                    </div>

                ))
            }


        </div>
    )
}

export default CoinsOverview