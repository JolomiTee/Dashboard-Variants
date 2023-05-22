import { DashboardIcon, MarketIcon, PortfolioIcon, TransactionIcon, NewsIcon, NotificationIcon, CommunityIcon, SettingsIcon, SupportIcon, FeedbackIcon  } from "./images/exports"

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
                        menuItem: 'PorSettingstfolio',
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
        ]

    },
]