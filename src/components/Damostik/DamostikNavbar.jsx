import React, { useState } from 'react'
import { BsLayoutTextSidebar } from 'react-icons/bs'
import BlockBalls from '../../assets/Blok/images/blokBalls.svg'
import SearchIcon from '../../assets/Damostik/icons/Search.svg'
import ProfilePicture from '../../assets/Damostik/images/Avatar.png'
import SettingsIcon from '../../assets/Damostik/icons/Settings.svg'
import Notification from '../../assets/Damostik/icons/NotificationBing.svg'

const DamostikNavbar = ({ activeMenu, setActiveMenu }) => {
    const [subNavigation, setSubNavigation] = useState(false)
    return (
        <div className='px-4 md:px-[40px] xl:px-[32px] py-3 xl:py-[29px] border-b border-blok-color w-100 flex justify-between items-center max-h-[70px] fixed w-full bg-white dark:bg-dark-mode navbar'>
            <div className='flex items-center justify-start'>

                <div className="flex items-center relative">
                    <img src={SearchIcon} alt="" className='absolute z-[5] ms-2 w-[16px] h-[16px]' />
                    <input type="search" name="search" id="search" placeholder='Search' className=' py-[5px] ps-[35px] pe-[10px] rounded-8 relative focus:ring-0 focus:outline-transparent h-11 placeholder:text-blok-grey dark:bg-gray-600' />
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


                {/* <button className="border border-blok-color p-1 rounded-8 px-2 flex justify-center items-center gap-2 h-11 dark:text-white">
                    <img src={Tether} alt="" className='w-5 h-5' />
                    <span className='flex flex-shrink-0'>USDT</span>
                    <span>
                        <img src={ChevronFilledDown} alt="coin" />
                    </span>
                </button> */}
                <div className='flex gap-6'>
                    <button title='settings'>
                        <img src={SettingsIcon} className='w-5 h-5' alt="Settings" />
                    </button>
                    <button title='notification'>
                        <img src={Notification} className='w-5 h-5' alt="Notification" />
                    </button>
                </div>
                <button className="border-l border-blok-color p-1 ps-4 px-2 flex justify-center items-center gap-3 h-11 dark:text-white">
                    <img src={ProfilePicture} alt="" className='w-7 h-7' />
                    <div className="">

                    <span className='flex flex-shrink-0 m-0 leading-[10px]'>Jolomi Taiwo</span>
                    <a className='text-12' href="mailto:jolomitee@gmail.com">jolomitee@gmail.com</a>
                    </div>
                </button>
            </div>

        </div>
    )
}

export default DamostikNavbar