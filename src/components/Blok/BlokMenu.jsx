import BlokLogo from '../../assets/Blok/images/logoLight.svg'
import { BlokMenuData } from '../../assets/Blok/data'
import { AiFillCloseSquare } from 'react-icons/ai'
import { useBlokContext } from '../../context/BlokContext'

const BlokMenu = ({ screenSize, activeMenu, setActiveMenu }) => {

    const { currentMenu, setCurrentMenu, appTheme, setAppTheme } = useBlokContext()


    return (
        <div className='h-screen'>
            <nav className='fixed w-[250px] md:w-[300px] lg:relative p-[20px] md:p-[42px] border-solid border-r border-blok-color h-screen overflow-y-scroll z-[100] bg-white dark:bg-dark-mode'>
                <div className="logo pb-14 ps-3">
                    <img src={BlokLogo} className='w-[73px] h-[24px] block' alt="Blok logo" />
                </div>
                {activeMenu && screenSize <= 1023 && (
                    <button className='absolute top-4 right-5 md:top-[20px]' onClick={() => (setActiveMenu(prev => !prev))}>
                        <AiFillCloseSquare style={{ width: '30px', height: '30px', fill: '#54AE94', }} />
                    </button>
                )}


                {
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
                </div>

                <div className="border border-blok-dark dark:border-white px-2 py-[6px] flex justify-between rounded-8 gap-1 mb-5">
                    {
                        BlokMenuData[0].themeSwitch.map((themes, index) => (
                            <button
                                key={index}
                                className={`${appTheme === themes.value ? 'bg-blok-dark-green text-white' : ''} theme_svg_wrapper text-14 flex gap-2 justify-start items-center py-2 px-4 rounded-8 text-blok-grey hover:rounded-8 hover:scale-[1.025] hover:text-white hover:bg-blok-dark-green dark:text-white`}
                                value={themes.value}
                                onClick={(e) => setAppTheme(themes.value)}
                            >
                                <object data={themes.themeIcon} type="image/svg+xml" alt="Lightmode"></object>
                                <span>{themes.theme}</span>
                            </button>
                        ))
                    }
                </div>
            </nav>

        </div>

    )
}

export default BlokMenu