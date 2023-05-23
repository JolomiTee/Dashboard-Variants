import ProfilePicture from '../../assets/Blok/images/ProfilePicture.png'
import BlockBalls from '../../assets/Blok/images/blokBalls.svg'
import {BsLayoutTextSidebar } from 'react-icons/bs'
import SearchIcon from '../../assets/Blok/images/SearchIcon.svg'
import ChevronFilledDown from '../../assets/Blok/images/ChevronFilledDown.svg'

import { useState } from 'react'

const BlokNavbar = ({activeMenu, setActiveMenu}) => {
    const [subNavigation, setSubNavigation] = useState(false)
    return (
        <div className='px-4 md:px-[40px] xl:px-[32px] py-3 xl:py-[29px] border-b border-blok-color w-100 flex justify-between items-center max-h-[90px]'>
            <div className='flex items-center justify-start'>
                <button onClick={() => setActiveMenu((prevMenuState) => !prevMenuState)}>
                    <BsLayoutTextSidebar className='lg:hidden me-5 hover:rotate-180 hover:shadow' style={{width: '25px', height: '25px'}} />
                </button>
                <h1 className='font-cabinet font-bold text-24 leading-[30px]'>Dashboard</h1>
            </div>


            <div className=" lg:hidden">
                <button
                    onClick={() => (setSubNavigation(prev => !prev))}
                    className='relative w-[40px] h-[40px] flex justify-center items-center border before:h-[40px] before:w-[40px] before:absolute before:-top-1 before:-right-1 before:rotate-6 before:border hover:before:top-0 hover:before:right-0 hover:before:-rotate-12 hover:shadow-md hover:before:shadow-md'>
                    <img src={BlockBalls} alt="" />
                </button>

            </div>

            <div className={`flex flex-col gap-5 absolute top-[70px] right-2 items-center bg-white shadow-md p-5 w-[270px] rounded-8 lg:flex-row lg:justify-end lg:relative lg:top-0 lg:right-0 lg:w-full lg:shadow-none lg:p-0 ${!subNavigation ? 'hidden' : 'block'}`}>

                <div className="flex items-center relative">
                    <img src={SearchIcon} alt="" className='absolute z-[5] ms-2 w-[16px] h-[16px]' />
                    <input type="search" name="search" id="search" className='border border-blok-color py-[5px] ps-[35px] pe-[10px] rounded-8 relative focus:ring-0 focus:outline-transparent' />
                </div>
                <div className="border border-blok-color p-1 rounded-8 px-2">
                    <select name="currency" id="currency">
                        <option defaultValue='USDT'>USDT</option>
                    </select>
                </div>
                <div className="border border-blok-color p-1 rounded-8 px-2 flex justify-center items-center gap-2">
                    <img src={ProfilePicture} alt="" className='w-8' />
                    <span>Jolomi Taiwo</span>
                    <button>
                        <img src={ChevronFilledDown} alt="" />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default BlokNavbar