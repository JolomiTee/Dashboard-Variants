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
import Bitcoin from './images/Bitcoin.svg'
import Ethereum from './images/Ethereum.svg'
import Tether from './images/Tether.svg'
import BtcGraph from './images/btcGraph.svg'
import EthGraph from './images/ethGraph.svg'
import TetherGraph from './images/tetherGraph.svg'

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

export const BlokCoinOverview = [
    {
        amount: 0.2832,
        cryptocurrency: 'BTC',
        marketCurrency: '$',
        marketValue: 14900,
        graph: BtcGraph,
        cryptocurrencyImage: Bitcoin,
        pair: 'BTC/USD',
        stock: -0.20,
        determine: false
    },
    {
        amount: 0.3324,
        cryptocurrency: 'ETH',
        marketCurrency: '$',
        marketValue: 8900,
        graph: EthGraph,
        cryptocurrencyImage: Ethereum,
        pair: 'ETH/USD',
        stock: +10.20,
        determine: true
    },
    {
        amount: 0.1825,
        cryptocurrency: 'USDT',
        marketCurrency: '$',
        marketValue: 4700,
        graph: TetherGraph,
        cryptocurrencyImage: Tether,
        pair: 'USDT/USD',
        stock: -0.021,
        determine: false
    },
]