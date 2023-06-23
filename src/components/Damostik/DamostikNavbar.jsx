import React, { useState } from 'react'
import { BsLayoutTextSidebar } from 'react-icons/bs'
import Damostik from '../../assets/Damostik/icons/Damostik.svg'
import SearchIcon from '../../assets/Damostik/icons/Search.svg'
import SettingsIcon from '../../assets/Damostik/icons/Settings.svg'
import Notification from '../../assets/Damostik/icons/NotificationBing.svg'

const DamostikNavbar = ({ activeMenu, setActiveMenu }) => {
    const [subNavigation, setSubNavigation] = useState(false)
    return (
        <div className='px-4 md:px-[40px] xl:px-[32px] py-3 xl:py-[29px] border-b border-blok-color w-100 flex justify-between items-center max-h-[90px] fixed w-full bg-white dark:bg-dark-mode navbar'>
<div className='flex items-center justify-start'>

<div className="flex items-center relative">
                    <img src={SearchIcon} alt="" className='absolute z-[5] ms-2 w-[16px] h-[16px]' />
                    <input type="search" name="search" id="search" placeholder='Search' className='border border-blok-color py-[5px] ps-[35px] pe-[10px] rounded-8 relative focus:ring-0 focus:outline-transparent h-11 placeholder:text-blok-grey dark:bg-gray-600' />
                </div>
            <button onClick={() => setActiveMenu((prevMenuState) => !prevMenuState)}>
                    <BsLayoutTextSidebar className='lg:hidden me-5 hover:rotate-180 hover:shadow' style={{ width: '25px', height: '25px' }} />
                </button>
</div>

                <div className=" lg:hidden">
                <button
                    onClick={() => (setSubNavigation(prev => !prev))}
                    className='relative w-[40px] h-[40px] flex justify-center items-center border before:h-[40px] before:w-[40px] before:absolute before:-top-1 before:-right-1 before:rotate-6 before:border hover:before:top-0 hover:before:right-0 hover:before:-rotate-12 hover:shadow-md hover:before:shadow-md after:focus:bg-transparent focus:bg-transparent'>
                    <img src={BlockBalls} alt="submenu" />
                </button>

            </div>

            <div className={`flex flex-col gap-5 absolute top-[70px] bg-white dark:bg-dark-mode z-[9000] right-2 items-center bg-transparent shadow-md p-5 w-[270px] rounded-8 lg:flex-row lg:justify-end lg:relative lg:top-0 lg:right-0 lg:w-full lg:shadow-none lg:p-0 ${!subNavigation ? 'hidden' : 'block'} lg:flex`}>


                <button className="border border-blok-color p-1 rounded-8 px-2 flex justify-center items-center gap-2 h-11 dark:text-white">
                    <img src={Tether} alt="" className='w-5 h-5' />
                    <span className='flex flex-shrink-0'>USDT</span>
                    <span>
                        <img src={ChevronFilledDown} alt="coin" />
                    </span>
                </button>
                <button className="border border-blok-color p-1 rounded-8 px-2 flex justify-center items-center gap-2 h-11 dark:text-white">
                    <img src={ProfilePicture} alt="" className='w-7 h-7' />
                    <span className='flex flex-shrink-0'>Jolomi Taiwo</span>
                    <span>
                        <img src={ChevronFilledDown} alt="" />
                    </span>
                </button>
            </div>

        </div>
    )
}

export default DamostikNavbar