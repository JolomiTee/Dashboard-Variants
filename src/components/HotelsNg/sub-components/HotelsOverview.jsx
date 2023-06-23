import React from 'react'
import ChevronDown from '../../../assets/HotelsNg/icons/ChevronDown.svg'
import { OverviewData } from '../../../assets/HotelsNg/data'
import { data } from 'autoprefixer'

const HotelsOverview = () => {
    return (
        <section id='Overview'>
            <button className='flex gap-3 mb-3 items-center'>Today <img src={ChevronDown} alt="Pick a date" /> </button>

            <div className='flex flex-wrap gap-5 mb-5'>
                {
                    OverviewData.map((data, index) => {
                        const {IconBackground, AccentColor, Icon, title, Info} = data;
                        return (
                            <div key={index} className={`p-5 w-[200px] rounded-16 text-hotels-letter-black1 font-bold text-visuelt-pro ${AccentColor}`}>
                                <div className={`p-3 mb-3 w-fit rounded-12 ${IconBackground}`}>
                                    <img src={Icon} alt={title} />
                                </div>
                                <div className="">
                                    <p className='text-14'>{title}</p>
                                    <p className='text-24'>{Info}</p>
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