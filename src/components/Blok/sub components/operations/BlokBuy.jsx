import React, { useState, useEffect } from 'react'
import ChevronFilledDown from '../../../../assets/Blok/images/ChevronFilledDown.svg'
import IndrasArrow from '../../../../assets/Blok/images/IndrasArrow.svg'
import { BsCurrencyDollar } from 'react-icons/bs'
import { BlokCryptocurrencyData } from '../../../../assets/Blok/data'
import ConversionRate from './ConversionRate'
import { useBlokContext } from '../../../../context/BlokContext'
// import axios from 'axios'


const BlokBuy = () => {
    const [showRecieveableCoins, setShowRecieveableCoins] = useState(false)

    const {
        selectedRecievableCoin, setSelectedRecievableCoin,
        selectedRecievableCoinRate
    } = useBlokContext()

    const [payableAmount, setPayableAmount] = useState(0)

    const selectRecieveableCoins = (e) => {
        e.preventDefault()
        setShowRecieveableCoins(!showRecieveableCoins);
    };

    const selectToUpdateRecieveabledCoins = (e) => {
        e.preventDefault()
        setShowRecieveableCoins(!showRecieveableCoins);
        const { title, value } = e.target;
        const img = e.target.querySelector('img').src;
        const [symbol, name] = e.target.textContent.split(' - ');

        const coinData = {
            title,
            value,
            img,
            symbol,
            name,
        };

        setSelectedRecievableCoin(coinData);
    };

    const handlePayableAmountChange = (e) => {
        setPayableAmount(e.target.value.toLocaleString())
    }


    return (
        <>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3 sm:w-full sm:mt-[10px] mdl:flex-row mdl:items-end mdl:mb-5 xl:mb-0 lg:flex-col lg:items-center xl:max-w-[430px] xl:grid">

                <div className="flex flex-col gap-2 md:min-w-[200px] lg:w-full">
                    <span className='dark:text-white'>You pay</span>

                    <div className='p-1 lg:p-2 bg-[#F6F6F6] border border-blok-color rounded-8 flex gap-2 justify-between items-center text-14 font-cabinet font-bold'>
                        <button className="bg-white py-2 rounded-8 px-2 flex justify-center items-center gap-2 w-fit" value={'USD'}>
                            <BsCurrencyDollar className='w-4 h-4 flex-shrink-0' />
                            <span className=''>USD</span>
                            <div className='w-5 h-5'>
                                <img src={ChevronFilledDown} className='flex-shrink-0 w-5 h-5 invisible' alt="" />
                            </div>
                        </button>
                        <div className="">

                            <input type="number" name="amount_paid" id="amount_paid" className='h-10 px-3 text-end text-16 rounded-8 focus:ring-0 focus:outline-transparent focus:border-transparent border-1 w-[100%] placeholder:text-14 lg:placeholder:text-16' placeholder='Enter an amount' onChange={handlePayableAmountChange} />
                        </div>

                    </div>
                </div>

                <span className='relative'>
                    <img src={IndrasArrow} alt="" className='mx-auto mdl:rotate-90 mdl:-translate-y-4 lg:rotate-0 lg:-translate-y-0 xl:rotate-0' />
                </span>
                <div className="flex flex-col gap-2 md:min-w-[200px] lg:w-full">
                    <span className='dark:text-white'>You get</span>

                    <div className='p-1 lg:p-2 bg-[#F6F6F6] border border-blok-color rounded-8 flex gap-2 justify-between items-center text-14 font-cabinet font-bold relative'>
                        <button
                            className="bg-white py-2 rounded-8 px-2 flex justify-center items-center gap-2 w-fit"
                            value={selectedRecievableCoin.value}
                            onClick={selectRecieveableCoins}
                            title={selectedRecievableCoin.name || 'Select a cryptocurrency'}
                        >
                            <div className='w-5 h-5'><img src={selectedRecievableCoin.img || "https://img.icons8.com/ios/50/cryptocurrency.png"} className='flex-shrink-0' alt={selectedRecievableCoin.name || 'Ethereum'} /></div>
                            <span className=''>{selectedRecievableCoin.symbol || 'Select'}</span>
                            <div className='w-5 h-5' title='Select a cryptocurrency'>
                                <img src={ChevronFilledDown} className='flex-shrink-0 w-5 h-5' alt="" />
                            </div>
                        </button>



                        {showRecieveableCoins &&
                            <div className="coin-list absolute translate-y-[180px] bg-white dark:bg-dark-mode text-blok-dark dark:text-white w-fit shadow-md text-16 p-2 pt-0 h-[300px] flex flex-col rounded-16 overflow-scroll z-[30]">
                                {
                                    BlokCryptocurrencyData.map((coin, index) => (
                                        <button key={index}
                                            title={coin.name}
                                            value={coin.id}
                                            onClick={selectToUpdateRecieveabledCoins}
                                            className='flex gap-3 items-center justify-start border-b p-2'>
                                            <div className='w-5 h-5'><img src={coin.image} className='flex-shrink-0' /></div>
                                            {coin.symbol.toUpperCase()} - {coin.name}
                                        </button>
                                    ))
                                }
                            </div>
                        }
                        <div className="">
                            <input
                                type="number"
                                name="amount_paid"
                                id="amount_paid"
                                className='h-10 px-3 text-end text-16 rounded-8 focus:ring-0 focus:outline-transparent focus:border-transparent border-1 w-[100%] placeholder:text-14'
                                value={(payableAmount / selectedRecievableCoinRate).toLocaleString()} readOnly />
                        </div>

                    </div>

                    <ConversionRate />
                </div>

                <div className="flex-grow lg:w-full">
                    <button
                        className='w-full flex justify-center items-center min-w-[200px] text-white bg-blok-dark-green h-[50px] rounded-8 text-14 font-bold font-cabinet'
                        onClick={(e) => e.preventDefault()}
                    >
                        Buy {selectedRecievableCoin.name || 'Coin'}
                    </button>
                </div>
            </form>
        </>
    )
}

export default BlokBuy