import React from 'react'
import { DamostikServicesIcons } from '../../../assets/Damostik/data'

const DamostikServices = () => {
  return (
    <div id='damostikServices' className='mt-10'>
        <h2 className="text-damostik-black text-20 font-medium leading-7 mb-5">
            Services
        </h2>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-2 gap-y-5 justify-center items-center'>
            {DamostikServicesIcons.map((icons, index) => {
                const {img, item} = icons;
                return(
                    <div key={index} className="flex flex-col gap-3 items-center border-b xl:border-0 border-damostik-light-green pb-2">
                        <span className="bg-damostik-light-green h-[50px] w-[50px] rounded-full flex justify-center items-center">
                            <img src={img} alt={item} className='w-8' />
                        </span>
                        <span className='text-14'>{item}</span>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default DamostikServices