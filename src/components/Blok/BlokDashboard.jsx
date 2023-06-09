import React from 'react'
import BlokAssetOverview from './sub components/BlokAssetOverview'
import BlokAnalytics from './sub components/BlokAnalytics'
import BlokOperations from './sub components/BlokOperations'
import BlokTransactions from './sub components/BlokTransactions'
import { Link } from 'react-router-dom'

const BlokDashboard = () => {
    return (
        <div className='px-4 md:px-[32px] py-5 md:py-[29px] mt-16 xl:mt-[100px]'>
            <div className="flex flex-col lg:justify-between lg:gap-8 xl:flex-row mb-3 xl:mb-2">
                <BlokAssetOverview />
                <BlokOperations />
            </div>
            <div className="grid gap-3 md:flex lg:justify-between xl:gap-8">
                <BlokAnalytics />
                <BlokTransactions />
            </div>
            <div className="dark:text-white mt-10 rounded-16 py-5 text-center bg-green-50 dark:bg-searchbar-dark">
                Developed, JolomiTee 2023. <br /> Original Figma designs by Ogunya Marvelous <br />
                <Link className='text-blok-dark-green font-bold' to='damostik'>Go to the next page</Link>
            </div>
        </div>
    )
}

export default BlokDashboard