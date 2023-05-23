import React from 'react'
import Tether from '../../../assets/Blok/images/Tether.svg'
import ChevronFilledDown from '../../../assets/Blok/images/ChevronFilledDown.svg'
import IndrasArrow from '../../../assets/Blok/images/IndrasArrow.svg'
import Ethereum from '../../../assets/Blok/images/ethereum.svg'
const BlokOperations = () => {
    return (
        <div className=' w-mxl:flex xl:w-full xl:max-w-[430px] border border-blok-color rounded-16 p-4 grid gap-5 sm:flex sm:p-6 md:grid'>
            <div className="flex flex-col gap-3 md:flex-row md:justify-start xl:justify-between">
                <p className='text-[20px] text-blok-dark font-cabinet font-bold'>Operations</p>

                <div className='flex border border-blok-color justify-between px-2 py-1 rounded-8 text-12 text-blok-grey bg-[#f6f6f6] max-w-fit'>
                    <button className='bg-white px-5 py-2 text-blok-dark rounded-8'>Buy</button>
                    <button className='px-5 py-1'>Sell</button>
                    <button className='px-5 py-1'>Exchange</button>
                </div>
            </div>

            <div className="grid gap-3 sm:w-full md:flex md:justify-start md:items-end">
                <div className="grid gap-2">
                    <span>You pay</span>
                    <div className='py-2 px-3 bg-[#F6F6F6] border border-blok-color rounded-8 flex justify-between items-center text-14 font-cabinet font-bold md:min-w-[200px]'>
                        <div className="bg-white py-2 rounded-8 px-2 flex justify-center items-center gap-2">
                            <img src={Tether} alt="" className='w-5 h-5' />
                            <span className=''>ETH</span>
                            <button>
                                <img src={ChevronFilledDown} alt="" />
                            </button>
                        </div>

                        <span>$1300.00</span>

                    </div>
                </div>

                <span className='relative'><img src={IndrasArrow} alt="" className='mx-auto md:-translate-y-4 md:rotate-90' /></span>

                <div className="grid gap-2">
                    <span>You get</span>
                    <div className='py-2 px-3 bg-[#F6F6F6] border border-blok-color rounded-8 flex justify-between items-center text-14 font-cabinet font-bold md:min-w-[200px]'>
                        <div className="bg-white py-2 rounded-8 px-2 flex justify-center items-center gap-2">
                            <img src={Ethereum} alt="" className='w-5 h-5' />
                            <span className=''>ETH</span>
                            <button>
                                <img src={ChevronFilledDown} alt="" />
                            </button>
                        </div>

                        <span>$1300.00</span>
                    </div>
                <span className='md:absolute md:translate-x-[200%]'>{`1${' ETH '} = ${' $1300.08'}`}</span>
                </div>

                <div className="md:min-w-[200px]">
                    <button className='w-full flex justify-center items-center text-white bg-blok-dark-green h-14 rounded-8 text-14  font-bold font-cabinet'>Buy Ethereum</button>
                </div>
            </div>
        </div>
    )
}

export default BlokOperations