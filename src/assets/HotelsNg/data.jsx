import Overview from './icons/overview.svg'
import GuestInfo from './icons/GuestInfo.svg'
import Employees from './icons/Employees.svg'
import Inventory from './icons/Inventory.svg'
import Reports from './icons/Reports.svg'
import Reviews from './icons/Reviews.svg'
import Finances from './icons/Finances.svg'
import Transactions from './icons/Transactions.svg'
import Settings from './icons/Boldsetting-2.svg'
import HelpSupport from './icons/Help&Support.svg'
import Logout from './icons/Logout.svg'

import NewBooking from './icons/NewBooking.svg'
import AvailableRooms from './icons/AvailableRooms.svg'
import Reservation from './icons/Reservations.svg'
import CheckIns from './icons/Checkins.svg'
import CheckOut from './icons/Checkouts.svg'

import Avatar1 from './icons/JohnDoe.png'
import Avatar2 from './icons/MaryJane.png'
import Avatar3 from './icons/LucasCovid.png'
import Rating from './icons/Rating.svg'

export const HotelsMenuItems = [
    {
        MenuHead: 'Summary',
        MenuItems : [
            {
                image: Overview,
                link: 'Overview',
            },
            {
                image: GuestInfo,
                link: 'Guest Info',
            },
            {
                image: Employees,
                link: 'Employees',
            },
            {
                image: Inventory,
                link: 'Inventory',
            },
        ]
    },
    {
        MenuHead: 'Feedback',
        MenuItems : [
            {
                image: Reports,
                link: 'Report',
            },
            {
                image: Reviews,
                link: 'Reviews',
            },
        ]
    },
    {
        MenuHead: 'Cashflow',
        MenuItems : [
            {
                image: Finances,
                link: 'Finances',
            },
            {
                image: Transactions,
                link: 'Transactions',
            },
        ]
    },
    {
        MenuHead: 'Others',
        MenuItems : [
            {
                image: Settings,
                link: 'Settings',
            },
            {
                image: HelpSupport,
                link: 'Help and Support',
            },
            {
                image: Logout,
                link: 'Log out',
            },
        ]
    },
]

export const OverviewData = [
    {
        IconBackground: 'hotels-green',
        AccentColor: 'hotels-green2',
        Icon: NewBooking,
        title: 'New Booking',
        Info: 263,
    },
    {
        IconBackground: 'hotels-blue',
        AccentColor: 'hotels-blue2',
        Icon: AvailableRooms,
        title: 'Available Rooms',
        Info: 137,
    },
    {
        IconBackground: 'hotels-purple',
        AccentColor: 'hotels-purple2',
        Icon: Reservation,
        title: 'Reservations',
        Info: 42,
    },
    {
        IconBackground: 'hotels-orange',
        AccentColor: 'hotels-orange2',
        Icon: CheckIns,
        title: 'Check Ins',
        Info: 32,
    },
    {
        IconBackground: 'hotels-aquamarine',
        AccentColor: 'hotels-aquamarine2',
        Icon: CheckOut,
        title: 'Check Outs',
        Info: 18,
    },
]

export const HotelReviews = [
    {
        Customer: Avatar1,
        Accent: 'hotels-purple2',
        Name: 'John Doe',
        Rating: '5.0',
        Posted: 'Posted on Aug.02.2022, 10:00am',
        Review: 'I had a wonderful stay at this hotel. The room was clean and comfortable, and the staff were incredibly friendly and helpful.'
    },
    {
        Customer: Avatar2,
        Accent: 'hotels-green2',
        Name: 'Mary Jane',
        Rating: '4.4',
        Posted: 'Posted on Aug.04.2022, 10:27am',
        Review: 'The location was convenient, but there were not many dining or shopping options nearby.'
    },
    {
        Customer: Avatar1,
        Accent: 'hotels-aquamarine2',
        Name: 'Lucas Covid',
        Rating: '4.9',
        Posted: 'Posted on Aug.01.2022, 09:00am',
        Review: 'The hotel was okay, nothing special. The room was clean and comfortable, but a bit on the small side. The staff were friendly, but not overly attentive.'
    },
]