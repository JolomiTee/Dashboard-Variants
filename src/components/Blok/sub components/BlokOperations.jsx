import React from 'react'
import ChevronFilledDown from '../../../assets/Blok/images/ChevronFilledDown.svg'
import IndrasArrow from '../../../assets/Blok/images/IndrasArrow.svg'
import Ethereum from '../../../assets/Blok/images/Ethereum.svg'
import { useBlokContext } from '../../../context/BlokContext'
import { BlokOperation } from '../../../assets/Blok/data'
import { BsCurrencyDollar } from 'react-icons/bs'

const BlokOperations = () => {
    const { currentOperation, setCurrentOperation } = useBlokContext()
    return (
        <div className='border border-blok-color rounded-16 p-4 flex flex-col gap-5 sm:flex-row mdl:flex-col lg:flex-row xl:flex-col sm:p-6'>
            <div className="flex flex-col gap-3 mdl:flex-row mdl:items-center mdl:gap-5 lg:flex-col lg:items-start lg:gap-3 xl:flex-row xl:justify-between xl:items-center h-fit">
                <p className='text-[20px] text-blok-dark dark:text-white font-cabinet font-bold'>Operations</p>

                <div className='flex border border-blok-color justify-between px-2 py-1 rounded-8 text-12 text-blok-grey bg-[#f6f6f6] max-w-fit h-[50px]'>
                    {
                        BlokOperation[0].operations.map((operation, index) => (
                            <button
                                className={`${currentOperation === operation.value ? 'bg-white px-5 py-2 text-blok-dark rounded-8' : ''} px-5 py-1`}
                                value={operation.value}
                                key={index}
                                onClick={(e) => setCurrentOperation(e.target.value)}
                            >
                                {operation.operation}
                            </button>
                        ))
                    }
                </div>
            </div>

            <form className="flex flex-col gap-3 sm:w-full sm:mt-[10px] mdl:flex-row mdl:items-end mdl:mb-5 xl:mb-0 lg:flex-col lg:items-center xl:max-w-[430px] xl:grid">

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

                            <input type="number" name="amount_paid" id="amount_paid" className='h-10 px-3 text-end text-16 rounded-8 focus:ring-0 focus:outline-transparent focus:border-transparent border-1 w-[100%] placeholder:text-14 lg:placeholder:text-16' placeholder='Enter an amount' />
                        </div>

                    </div>
                </div>

                <span className='relative'>
                    <img src={IndrasArrow} alt="" className='mx-auto mdl:rotate-90 mdl:-translate-y-4 lg:rotate-0 lg:-translate-y-0 xl:rotate-0' />
                </span>

                <div className="flex flex-col gap-2 md:min-w-[200px] lg:w-full">
                    <span className='dark:text-white'>You get</span>
                    <div className='p-1 bg-[#F6F6F6] border border-blok-color rounded-8 flex gap-2 justify-between items-center text-14 font-cabinet font-bold'>
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
                    <span className='font-cabinet font-bold text-blok-grey mdl:absolute mdl:translate-y-[90px] lg:relative lg:translate-y-[0] xl:relative xl:translate-x-0'>{`1${' ETH '} = ${' $1300.08'}`}</span>
                </div>

                <div className="flex-grow">
                    <button className='w-full flex justify-center items-center min-w-[200px] text-white bg-blok-dark-green h-[50px] rounded-8 text-14 font-bold font-cabinet'>Buy Ethereum</button>
                </div>
            </form>
        </div>
    )
}

export default BlokOperations