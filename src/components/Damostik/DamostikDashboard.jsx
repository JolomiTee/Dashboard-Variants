import React from 'react'
import { Link } from 'react-router-dom'
import DamostikAssetOverview from './sub components/DamostikAssetOverview'
import DamostikServices from './sub components/DamostikServices'
import DamostikAccountHistory from './sub components/DamostikAccountHistory'

const DamostikDashboard = () => {
  return (
    <div className='px-4 md:px-[32px] py-5 md:py-[29px] mt-16 xl:mt-[80px]'>
            <div className="flex flex-col lg:justify-between lg:gap-8 mb-3 xl:mb-2">
                <DamostikAssetOverview />
                <section className='flex flex-col'>
                    <DamostikServices />
                    <DamostikAccountHistory />
                </section>
            </div>
            <div className="dark:text-white mt-10 rounded-16 py-5 text-center bg-green-50 dark:bg-searchbar-dark">
                Developed, JolomiTee 2023. <br /> Original Figma designs by Ogunya Marvelous <br />
                <Link className='text-blok-dark-green font-bold' to='/hotelsng'>Go to the next page</Link>
            </div>
        </div>
  )
}

export default DamostikDashboard