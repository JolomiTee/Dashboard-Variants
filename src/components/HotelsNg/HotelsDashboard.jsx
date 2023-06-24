import React from 'react';
import { Link } from 'react-router-dom'
import HotelsOverview from './sub-components/HotelsOverview'
import HotelExpenses from './sub-components/HotelExpenses'
import ReservationAnalytics from './sub-components/ReservationAnalytics'
import HotelCalender from './sub-components/HotelCalender'
import CustomerReviews from './sub-components/CustomerReviews'


const HotelsDashboard = () => {
  return (
    <div className='px-4 md:px-[32px] py-5 md:py-[29px] mt-16 xl:mt-[80px]'>
            <div className="flex flex-col lg:justify-between lg:gap-8 mb-3 xl:mb-2">
                <HotelsOverview />
                <section className='grid lg:flex lg:gap-x-10'>
                    <HotelExpenses />
                    <ReservationAnalytics />
                </section>
                <section className='grid gap-y-5 lg:flex lg:gap-x-10 '>
                    <HotelCalender />
                    <CustomerReviews />
                </section>
            </div>
            <div className="dark:text-white mt-10 rounded-16 py-5 text-center bg-green-50 dark:bg-searchbar-dark">
                Developed, JolomiTee 2023. <br /> Original Figma designs by Ogunya Marvelous <br />
                {/* <Link className='text-blok-dark-green font-bold' to='/hotelsng'>Go to the next page</Link> */}
            </div>
        </div>
  )
}

export default HotelsDashboard