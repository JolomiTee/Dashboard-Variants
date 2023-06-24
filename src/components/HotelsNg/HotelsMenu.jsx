import React, { useState } from 'react'
import { AiFillCloseSquare } from 'react-icons/ai'
import { HotelsMenuItems } from '../../assets/HotelsNg/data'
import BlokLogo from '../../assets/Blok/images/logoLight.svg'
const HotelsMenu = ({ screenSize, activeMenu, setActiveMenu }) => {
    const [currentMenu, setCurrentMenu] = useState('Overview')
    return (
        <div className='h-screen'>
            <nav className='fixed w-[250px] md:w-[300px] lg:relative border-solid border-r border-blok-color h-screen overflow-y-scroll z-[100] bg-white dark:bg-dark-mode'>
                <div className="logo mt-5 ps-[40px] pb-[40px]">
                    <img src={BlokLogo} className=' block' alt="Blok logo" />
                </div>
                {activeMenu && screenSize <= 1023 && (
                    <button className='absolute top-4 right-5 md:top-[20px]' onClick={() => (setActiveMenu(prev => !prev))}>
                        <AiFillCloseSquare style={{ width: '30px', height: '30px', fill: '#54AE94', }} />
                    </button>
                )}

                {HotelsMenuItems.map((menuItem, index) => (
                    <div key={index} className='ps-[40px]'>

                        <p className='mb-4 uppercase text-hotels-letter-black2 font-bold font-product-sans'>{menuItem.MenuHead}</p>

                        <ul key={index} className='m-0 p-0 pb-5'>

                            {menuItem.MenuItems.map((navItems, index) => {
                                const { image, link } = navItems;
                                return (
                                    <li className='mb-2'>
                                        <button
                                            title={link}
                                            className={`flex w-full rounded-4 px-5 py-3 gap-5 font-product-sans font-bold hover:bg-hotels-green2 ${link === currentMenu ? 'text-white bg-hotels-black hover:bg-hotels-black' : link === 'Log out' ? 'text-hotels-red' : 'text-hotels-grey'}`}
                                            onClick={(e) => setCurrentMenu(link)}
                                        >
                                            <img src={image} alt={link} /> <span>{link}</span>
                                        </button>
                                    </li>
                                );
                            })}

                        </ul>
                    </div>
                ))}
            </nav>

        </div>
    )
}

export default HotelsMenu