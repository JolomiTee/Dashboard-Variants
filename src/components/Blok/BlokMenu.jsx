import React from 'react'
import BlokLogo from '../../assets/Blok/images/logoLight.svg'
import { BlokMenuData } from '../../assets/Blok/data'
const BlokMenu = () => {
    return (
        <nav className='w-[300px] p-[47px] border-solid border-r border-blok-color h-screen'>
            <div className="logo pb-14 ps-3">
                <img src={BlokLogo} className='w-[73px] h-[24px] block' alt="Blok logo" />
            </div>

            {
                BlokMenuData[0].mainMenu.map((menus, index) => (
                    <div className="menu mb-10">
                        <p className="text-16 font-bold leading-5 text-blok-grey ps-3 pb-6" key={index}>{menus.menuGrouptitle}</p>
                        <ul className="m-0 p-0 flex flex-col">
                            {menus.menuGroupItems.map((items, index) => (
                                <li className="text-blok-grey text-16 my-1">
                                    <button className="flex ps-3 gap-5 items-center justify-start h-[45px] w-full hover:bg-slate-200 hover:rounded-8 hover:text-lg">
                                        <img src={items.menuIcon} alt={items.menuIcon} />
                                        <span>{items.menuItem}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>

                    </div>
                ))
            }
        </nav>
    )
}

export default BlokMenu