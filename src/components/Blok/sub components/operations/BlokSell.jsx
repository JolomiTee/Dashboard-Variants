import React from 'react'
import ChevronFilledDown from '../../../../assets/Blok/images/ChevronFilledDown.svg'
import IndrasArrow from '../../../../assets/Blok/images/IndrasArrow.svg'
import Ethereum from '../../../../assets/Blok/images/Ethereum.svg'
import { BsCurrencyDollar } from 'react-icons/bs'
const BlokSell = () => {
    return (
        <>
            <form className="flex flex-col gap-3 sm:w-full sm:mt-[10px] mdl:flex-row mdl:items-end mdl:mb-5 xl:mb-0 lg:flex-col lg:items-center xl:max-w-[430px] xl:grid">
                <div className="flex flex-col gap-2 md:min-w-[200px] lg:w-full">
                    <span className='dark:text-white'>To sell</span>
                    <div className='p-1 lg:p-2 bg-[#F6F6F6] border border-blok-color rounded-8 flex gap-2 justify-between items-center text-14 font-cabinet font-bold'>
                        <button className="bg-white py-2 rounded-8 px-2 flex justify-center items-center gap-2 w-fit" value={'USD'}>
                            <div className='w-5 h-5'><img src={Ethereum} className='flex-shrink-0' /></div>
                            <span className=''>ETH</span>
                            <div className='w-5 h-5'>
                                <img src={ChevronFilledDown} className='flex-shrink-0 w-5 h-5' alt="" />
                            </div>
                        </button>
                        <div className="">
                            <input type="number" name="amount_paid" id="amount_paid" className='h-10 px-3 text-end text-16 rounded-8 focus:ring-0 focus:outline-transparent focus:border-transparent border-1 w-[100%] placeholder:text-14' defaultValue={0} />
                        </div>

                    </div>
                </div>

                <span className='relative'>
                    <img src={IndrasArrow} alt="" className='invisible' />
                </span>


                <div className="flex flex-col gap-2 md:min-w-[200px] lg:w-full">
                    <span className='dark:text-white'>To recieve</span>

                    <div className='p-1 lg:p-2 bg-[#F6F6F6] border border-blok-color rounded-8 flex gap-2 justify-between items-center text-14 font-cabinet font-bold'>
                        <button className="bg-white py-2 rounded-8 px-2 flex justify-center items-center gap-2 w-fit" value={'USD'}>
                            <BsCurrencyDollar className='w-4 h-4 flex-shrink-0' />
                            <span className=''>USD</span>
                            <div className='w-5 h-5'>
                                <img src={ChevronFilledDown} className='flex-shrink-0 w-5 h-5 invisible' alt="" />
                            </div>
                        </button>
                        <div className="">

                            <input type="number" name="amount_paid" id="amount_paid" className='h-10 px-3 text-end text-16 rounded-8 focus:ring-0 focus:outline-transparent focus:border-transparent border-1 w-[100%] placeholder:text-14 lg:placeholder:text-16' placeholder='Enter an amount' />
                        </div>

                    </div>
                    <span className='invisible font-cabinet font-bold text-blok-grey mdl:absolute mdl:translate-y-[90px] lg:relative lg:translate-y-[0] xl:relative xl:translate-x-0'>{`1${' ETH '} = ${' $1300.08'}`}</span>
                </div>




                <div className="flex-grow lg:w-full">
                    <button className='w-full flex justify-center items-center min-w-[200px] text-white bg-blok-dark-green h-[50px] rounded-8 text-14 font-bold font-cabinet'>Sell Ethereum</button>
                </div>
            </form>
        </>
    )
}

export default BlokSell