import BlokLogo from '../../assets/Blok/images/logoLight.svg'
import { BlokMenuData } from '../../assets/Blok/data'
import {AiFillCloseSquare} from 'react-icons/ai'
import { useBlokContext } from '../../context/BlokContext'

const BlokMenu = ({screenSize, activeMenu, setActiveMenu}) => {
    const {currentMenu, setCurrentMenu} = useBlokContext()

    return (

        <nav className='absolute lg:relative w-[250px] md:w-[340px] p-[20px] md:p-[42px] border-solid border-r border-blok-color h-screen overflow-y-scroll z-[100] bg-white'>
            <div className="logo pb-14 ps-3">
                <img src={BlokLogo} className='w-[73px] h-[24px] block' alt="Blok logo" />
            </div>
            {activeMenu && screenSize <= 1023 && (
                <button className='absolute top-4 right-5 md:top-[20px]' onClick={() => (setActiveMenu(prev => !prev))}>
                    <AiFillCloseSquare style={{width: '30px', height:'30px', fill: '#54AE94',}} />
                </button>
            )}


            {
                BlokMenuData[0].mainMenu.map((menus, index) => (
                    <div className="menu mb-10" key={index}>
                        <p className="text-16 font-bold leading-5 text-blok-grey ps-3 pb-6" key={index}>{menus.menuGrouptitle}</p>
                        <ul className="m-0 p-0 flex flex-col">
                            {menus.menuGroupItems.map((items, index) => (
                                <li className="text-blok-grey text-16 my-1" key={index}>
                                    <button
                                        className={`flex ps-3 gap-5 items-center justify-start h-[45px] w-full hover:bg-slate-200 hover:rounded-8 hover:scale-[1.025]`}
                                        onClick={(e) => setCurrentMenu(items.menuItem)}
                                    >
                                        <img src={items.menuIcon} alt={items.menuIcon} />
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
                            <li className="text-blok-grey text-16 my-1" key={index}>
                                <button
                                    className="flex ps-3 gap-5 items-center justify-start h-[45px] w-full hover:bg-slate-200 hover:rounded-8 hover:scale-[1.025]"
                                    onClick={(e) => setCurrentMenu(menu.menuItem)}
                                >
                                    <img src={menu.menuIcon} alt={menu.menuIcon} className='hover:stroke-blok-dark-green' />
                                    <span>{menu.menuItem}</span>
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="border border-blok-dark px-2 p-1 flex justify-between rounded-8 gap-1 mb-5">
                {
                    BlokMenuData[0].themeSwitch.map((themes, index) => (
                        <button key={index} className='text-14 flex gap-2 justify-start items-center py-2 px-4 rounded-8 text-blok-grey hover:bg-slate-200 hover:rounded-8 hover:scale-[1.025]'>
                            <img src={themes.themeIcon} alt="Lightmode" className='' />
                            <span>{themes.theme}</span>
                        </button>
                    ))
                }
            </div>
        </nav>
    )
}

export default BlokMenu