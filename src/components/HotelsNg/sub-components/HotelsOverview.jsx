import React from 'react'
import ChevronDown from '../../../assets/HotelsNg/icons/ChevronDown.svg'
import { OverviewData } from '../../../assets/HotelsNg/data'

const HotelsOverview = () => {
    return (
        <section id='Overview'>
            <button className='flex gap-3 mb-3 items-center font-visuelt-pro'>Today <img src={ChevronDown} alt="Pick a date" /> </button>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-5'>
                {
                    OverviewData.map((data, index) => {
                        const {IconBackground, AccentColor, Icon, title, Info} = data;
                        return (
                            <div key={index} className={`p-5 w-full rounded-16 text-hotels-letter-black1 font-bold text-visuelt-pro ${AccentColor} flex items-center lg:flex-col lg:items-start gap-5 lg:gap-3 h-fit`}>
                                <div className={`p-3 w-fit rounded-12 ${IconBackground}`}>
                                    <img src={Icon} alt={title} />
                                </div>
                                <div className="font-visuelt-pro">
                                    <p className='text-14'>{title}</p>
                                    <p className='text-24 leading-[28px]'>{Info}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default HotelsOverview