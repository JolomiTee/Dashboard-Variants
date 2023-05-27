import React from 'react'
import { useBlokContext } from '../../../context/BlokContext'
import { BlokOperation } from '../../../assets/Blok/data'
import BlokBuy from './operations/BlokBuy'
import BlokSell from './operations/BlokSell'
import BlokExchange from './operations/BlokExchange'

const BlokOperations = () => {
    const { currentOperation, setCurrentOperation } = useBlokContext()
    return (
        <div className='border border-blok-color rounded-16 p-4 flex flex-col gap-5 sm:flex-row mdl:flex-col lg:flex-row xl:flex-col sm:p-6 min-h-[448px]'>
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
            {
                currentOperation === 'buy' ? <BlokBuy /> :
                currentOperation === 'sell' ? <BlokSell /> : <BlokExchange />
            }


        </div>
    )
}

export default BlokOperations