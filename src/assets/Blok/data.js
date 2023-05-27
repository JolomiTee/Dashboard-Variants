import DashboardIcon from "./images/dashboardIcon.svg";
import MarketIcon from "./images/MarketIcon.svg";
import PortfolioIcon from "./images/PortfolioIcon.svg";
import TransactionIcon from "./images/TransactionsIcon.svg";
import NewsIcon from "./images/NewsIcon.svg";
import NotificationIcon from "./images/NotificationIcon.svg";
import CommunityIcon from "./images/CommunityIcon.svg";
import SettingsIcon from "./images/SettingsIcon.svg";
import SupportIcon from "./images/GetSupportIcon.svg";
import FeedbackIcon from "./images/AddFeedbackIcon.svg";
import LightModeIcon from "./images/LightModeIcon.svg";
import DarkModeIcon from "./images/DarkModeIcon.svg";
import Bitcoin from "./images/Bitcoin.svg";
import Ethereum from "./images/Ethereum.svg";
import Tether from "./images/Tether.svg";
import BtcGraph from "./images/btcGraph.svg";
import EthGraph from "./images/ethGraph.svg";
import TetherGraph from "./images/tetherGraph.svg";

export const BlokMenuData = [
	{
		mainMenu: [
			{
				menuGrouptitle: "Overview",
				menuGroupItems: [
					{
						menuItem: "Dashboard",
						menuIcon: DashboardIcon,
					},
					{
						menuItem: "Market",
						menuIcon: MarketIcon,
					},
					{
						menuItem: "Portfolio",
						menuIcon: PortfolioIcon,
					},
					{
						menuItem: "Transactions",
						menuIcon: TransactionIcon,
					},
					{
						menuItem: "News",
						menuIcon: NewsIcon,
					},
				],
			},
			{
				menuGrouptitle: "Account",
				menuGroupItems: [
					{
						menuItem: "Notification",
						menuIcon: NotificationIcon,
					},
					{
						menuItem: "Community",
						menuIcon: CommunityIcon,
					},
					{
						menuItem: "Settings",
						menuIcon: SettingsIcon,
					},
				],
			},
		],
		supportMenu: [
			{
				menuItem: "Get Support",
				menuIcon: SupportIcon,
			},
			{
				menuItem: "Add Feedback",
				menuIcon: FeedbackIcon,
			},
		],
		themeSwitch: [
			{
				theme: "Light",
				themeIcon: LightModeIcon,
				value: "light",
			},
			{
				theme: "Dark",
				themeIcon: DarkModeIcon,
				value: "dark",
			},
		],
	},
];

export const BlokOperation = [
	{
		operations: [
			{
				operation: "Buy",
				value: "buy",
			},
			{
				operation: "Sell",
				value: "sell",
			},
			{
				operation: "Exchange",
				value: "exchange",
			},
		],
	},
];

export const BlokCoinOverview = [
	{
		amount: 0.2832,
		cryptocurrency: "BTC",
		marketCurrency: "$",
		marketValue: 14900,
		graph: BtcGraph,
		cryptocurrencyImage: Bitcoin,
		pair: "BTC/USD",
		stock: -0.2,
		determine: false,
	},
	{
		amount: 0.3324,
		cryptocurrency: "ETH",
		marketCurrency: "$",
		marketValue: 8900,
		graph: EthGraph,
		cryptocurrencyImage: Ethereum,
		pair: "ETH/USD",
		stock: +10.2,
		determine: true,
	},
	{
		amount: 0.1825,
		cryptocurrency: "USDT",
		marketCurrency: "$",
		marketValue: 4700,
		graph: TetherGraph,
		cryptocurrencyImage: Tether,
		pair: "USDT/USD",
		stock: -0.021,
		determine: false,
	},
];

export const BlokTransactionsData = [
	{
		increase: true,
		type: "Bitcoin",
		symbol: "BTC",
		date: "02 Oct 2022, 10:02 PM",
		cryptocurrencyValue: 0.0982,
		marketValue: 480.0,
	},
	{
		increase: false,
		type: "Ethereum",
		symbol: "ETH",
		date: "20 Oct 2022, 10:19 AM",
		cryptocurrencyValue: 0.0982,
		marketValue: 180.0,
	},
	{
		increase: false,
		type: "Cardona",
		symbol: "ADA",
		date: "25 Oct 2022, 03:19 AM",
		cryptocurrencyValue: 0.0982,
		marketValue: 1080.52,
	},
	{
		increase: false,
		type: "Cardona",
		symbol: "ADA",
		date: "25 Oct 2022, 03:25 AM",
		cryptocurrencyValue: 0.0982,
		marketValue: 1080.52,
	},
];

export const BlokRangeSelectors = [
	{
		range_value: "3HRS",
		text_value: "1D",
	},
	{
		range_value: "12HRS",
		text_value: "7D",
	},
	{
		range_value: "5DAYS",
		text_value: "1M",
	},
	{
		range_value: "10DAYS",
		text_value: "2M",
	},
];

export const BlokCurrencyData = [];
