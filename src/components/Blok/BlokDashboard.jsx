import React from 'react'
import BlokAssetOverview from './sub components/BlokAssetOverview'
import BlokAnalytics from './sub components/BlokAnalytics'
import BlokOperations from './sub components/BlokOperations'
import BlokTransactions from './sub components/BlokTransactions'

const BlokDashboard = () => {
  return (
    <div className='px-4 md:px-[32px] py-5 md:py-[29px]'>
        <div className="flex flex-col lg:justify-between lg:gap-8 xl:flex-row mb-3 xl:mb-2">
            <BlokAssetOverview />
            <BlokOperations />
        </div>
        <div className="grid gap-3 md:flex lg:justify-between xl:gap-8">
            <BlokAnalytics />
            <BlokTransactions />
        </div>
    </div>
  )
}

export default BlokDashboard