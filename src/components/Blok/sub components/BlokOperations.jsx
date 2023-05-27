import React from 'react'
import ChevronFilledDown from '../../../assets/Blok/images/ChevronFilledDown.svg'
import IndrasArrow from '../../../assets/Blok/images/IndrasArrow.svg'
import Ethereum from '../../../assets/Blok/images/Ethereum.svg'
import { useBlokContext } from '../../../context/BlokContext'
import { BlokOperation } from '../../../assets/Blok/data'
import {BsCurrencyDollar} from 'react-icons/bs'

const BlokOperations = () => {
    const {currentOperation, setCurrentOperation} = useBlokContext()
    return (
        <div className='border border-blok-color rounded-16 p-4 grid gap-5 sm:flex sm:p-6 md:grid'>
            <div className="flex flex-col gap-3 md:flex-row md:justify-start md:items-center xl:justify-between xl:h-fit">
                <p className='text-[20px] text-blok-dark dark:text-white font-cabinet font-bold'>Operations</p>

                <div className='flex border border-blok-color justify-between px-2 py-1 rounded-8 text-12 text-blok-grey bg-[#f6f6f6] max-w-fit'>
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

            <form className="grid gap-3 sm:w-full md:flex md:justify-stretch md:items-end xl:max-w-[430px] xl:grid">
                <div className="grid gap-2 md:min-w-[200px]">
                    <span className='dark:text-white'>You pay</span>
                    <div className='py-2 px-3 bg-[#F6F6F6] border border-blok-color rounded-8 flex justify-between items-center text-14 font-cabinet font-bold'>
                        <button className="bg-white py-2 rounded-8 px-2 flex justify-center items-center gap-2" value={'USD'}>
                            <BsCurrencyDollar className='w-5 h-5' />
                            <span className=''>USD</span>
                            <span>
                                <img src={ChevronFilledDown} alt="" />
                            </span>
                        </button>

                        <input type="number" name="amount_paid" id="amount_paid" className='h-10 px-3 text-end text-16 rounded-8 focus:ring-0 focus:outline-transparent focus:border-transparent border-1' placeholder='Enter an amount' value={4200}/>

                    </div>
                </div>

                <span className='relative'><img src={IndrasArrow} alt="" className='mx-auto md:-translate-y-4 md:rotate-90 xl:translate-y-4 xl:rotate-0' /></span>

                <div className="grid gap-2 md:min-w-[200px]">
                    <span className='dark:text-white'>You get</span>
                    <div className='py-2 px-3 bg-[#F6F6F6] border border-blok-color rounded-8 flex justify-between items-center text-14 font-cabinet font-bold'>
                        <button className="bg-white py-2 rounded-8 px-2 flex justify-center items-center gap-2">
                            <img src={Ethereum} alt="" className='w-5 h-5' />
                            <span className=''>ETH</span>
                            <span>
                                <img src={ChevronFilledDown} alt="" />
                            </span>
                        </button>

                        <input type="number" name="asset_recieved" id="asset_recieved" className='h-10 px-3 text-end text-16 rounded-8 focus:ring-0 focus:outline-transparent focus:border-transparent border-1' value={3.123} />
                    </div>
                    <span className='font-cabinet font-bold text-blok-grey md:absolute md:translate-x-[200%] xl:relative xl:translate-x-0'>{`1${' ETH '} = ${' $1300.08'}`}</span>
                </div>

                <div className="flex-grow">
                    <button className='w-full flex justify-center items-center text-white bg-blok-dark-green h-14 rounded-8 text-14  font-bold font-cabinet'>Buy Ethereum</button>
                </div>
            </form>
        </div>
    )
}

export default BlokOperations