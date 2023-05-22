import DashboardIcon from './images/dashboardIcon.svg'
import MarketIcon from './images/MarketIcon.svg'
import PortfolioIcon from './images/PortfolioIcon.svg'
import TransactionIcon from './images/TransactionsIcon.svg'
import NewsIcon from './images/NewsIcon.svg'
import NotificationIcon from './images/NotificationIcon.svg'
import CommunityIcon from './images/CommunityIcon.svg'
import SettingsIcon from './images/SettingsIcon.svg'
import SupportIcon from './images/GetSupportIcon.svg'
import FeedbackIcon from './images/AddFeedbackIcon.svg'
import LightModeIcon from './images/LightModeIcon.svg'
import DarkModeIcon from './images/DarkModeIcon.svg'

export const BlokMenuData = [
    {
        mainMenu: [
            {
                menuGrouptitle : 'Overview',
                menuGroupItems : [
                    {
                        menuItem: 'Dashboard',
                        menuIcon: DashboardIcon,
                    },
                    {
                        menuItem: 'Market',
                        menuIcon: MarketIcon,
                    },
                    {
                        menuItem: 'Portfolio',
                        menuIcon: PortfolioIcon,
                    },
                    {
                        menuItem: 'Transactions',
                        menuIcon: TransactionIcon,
                    },
                    {
                        menuItem: 'News',
                        menuIcon: NewsIcon,
                    }
                ]
            },
            {
                menuGrouptitle : 'Account',
                menuGroupItems : [
                    {
                        menuItem: 'Notification',
                        menuIcon: NotificationIcon,
                    },
                    {
                        menuItem: 'Community',
                        menuIcon: CommunityIcon,
                    },
                    {
                        menuItem: 'Settings',
                        menuIcon: SettingsIcon,
                    }
                ]
            },
        ],
        supportMenu : [
            {
                menuItem: 'Get Support',
                menuIcon: SupportIcon,
            },
            {
                menuItem: 'Add Feedback',
                menuIcon: FeedbackIcon,
            },
        ],
        themeSwitch: [
            {
                theme: 'Light',
                themeIcon: LightModeIcon,
            },
            {
                theme: 'Dark',
                themeIcon: DarkModeIcon,
            },
        ]


    },
]