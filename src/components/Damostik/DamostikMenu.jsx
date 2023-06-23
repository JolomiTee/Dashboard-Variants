import React, { useState } from 'react'
import { AiFillCloseSquare } from 'react-icons/ai'
import DamostikLogo from '../../assets/Damostik/icons/DamostikLogo.svg'
import { DamsotikDashboardData } from '../../assets/Damostik/data'
const DamostikMenu = ({ screenSize, activeMenu, setActiveMenu }) => {
    const [currentMenu, setCurrentMenu] = useState('Dashboard')
    return (
        <div className='h-screen'>
            <nav className='fixed w-[250px] md:w-[300px] lg:relative border-solid border-r border-blok-color h-screen overflow-y-scroll z-[100] bg-white dark:bg-dark-mode'>
                <div className="logo mt-3 pb-[40px]">
                    <img src={DamostikLogo} className=' block' alt="Blok logo" />
                </div>
                {activeMenu && screenSize <= 1023 && (
                    <button className='absolute top-4 right-5 md:top-[20px]' onClick={() => (setActiveMenu(prev => !prev))}>
                        <AiFillCloseSquare style={{ width: '30px', height: '30px', fill: '#54AE94', }} />
                    </button>
                )}
                <ul className="m-0 p-0 ps-[40px] pb-5 flex flex-col">

                    {
                        DamsotikDashboardData[0].map((item, index) => (
                            <li className="text-blok-grey dark:text-white text-16 my-2" key={index}>
                                <button
                                    className={`flex ps-8 gap-5 items-center justify-start h-[50px] w-full hover:bg-slate-200  hover:scale-[1.025] dark:hover:text-blok-dark ${currentMenu === item.item ? 'bg-damostik-light-green font-bold text-damostik-black' : ''}`}
                                    onClick={(e) => setCurrentMenu(item.item)}
                                >
                                    <img src={item.img} alt={item.item} className='w-[25px] h-[25px]' />
                                    <span>{item.item}</span>
                                </button>
                            </li>
                        ))
                    }
                </ul>
                <ul className="m-0 p-0 ps-[40px] flex flex-col">

                    {
                        DamsotikDashboardData[1].map((item, index) => (
                            <li className="text-blok-grey dark:text-white text-16 my-2" key={index}>
                                <button
                                    className={`flex ps-8 gap-5 items-center justify-start h-[50px] w-full hover:bg-slate-200  hover:scale-[1.025] dark:hover:text-blok-dark ${currentMenu === item.item ? 'bg-damostik-light-green font-bold text-damostik-black' : ''}`}
                                    onClick={(e) => setCurrentMenu(item.item)}
                                >
                                    <img src={item.img} alt={item.item} className='w-[25px] h-[25px]' />
                                    <span>{item.item}</span>
                                </button>
                            </li>
                        ))
                    }
                </ul>


                {/* {
                    BlokMenuData[0].mainMenu.map((menus, index) => (
                        <div className="menu mb-10" key={index}>
                            <p className="text-16 font-bold leading-5 text-blok-grey dark:text-white ps-3 pb-6" key={index}>{menus.menuGrouptitle}</p>
                            <ul className="m-0 p-0 flex flex-col">
                                {menus.menuGroupItems.map((items, index) => (
                                    <li className="text-blok-grey dark:text-white text-16 my-1" key={index}>
                                        <button
                                            className={`flex ps-3 gap-5 items-center justify-start h-[45px] w-full hover:bg-slate-200 hover:rounded-8 hover:scale-[1.025] dark:hover:text-blok-dark ${currentMenu === items.menuItem ? 'bg-blok-green font-bold text-blok-dark rounded-8' : ''}`}
                                            onClick={(e) => setCurrentMenu(items.menuItem)}
                                        >
                                            <img src={items.menuIcon} alt={items.menuIcon} className='' />
                                            <span>{items.menuItem}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                }

                <div className='mb-10'>
                    <ul>
                        {
                            BlokMenuData[0].supportMenu.map((menu, index) => (
                                <li className="text-blok-grey dark:text-white text-16 my-1" key={index}>
                                    <button
                                        className={`flex ps-3 gap-5 items-center justify-start h-[45px] w-full hover:bg-slate-200 hover:rounded-8 hover:scale-[1.025] dark:hover:text-blok-dark ${currentMenu === menu.menuItem ? 'bg-blok-green font-bold text-blok-dark rounded-8' : ''}`}
                                        onClick={(e) => setCurrentMenu(menu.menuItem)}
                                    >
                                        <img src={menu.menuIcon} alt={menu.menuIcon} className='hover:stroke-blok-dark-green' />
                                        <span>{menu.menuItem}</span>
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div> */}

            </nav>

        </div>
    )
}

export default DamostikMenu