import React from 'react'
import BlokAssetOverview from './sub components/BlokAssetOverview'
import BlokAnalytics from './sub components/BlokAnalytics'
import BlokOperations from './sub components/BlokOperations'
import BlokTransactions from './sub components/BlokTransactions'

const BlokDashboard = () => {
  return (
    <div className='px-3 md:px-[32px] py-3 md:py-[29px] flex flex-wrap gap-20'>
        <div className="flex flex-col gap-20">
            <BlokAssetOverview />
            <BlokAnalytics />
        </div>
        <div className="flex flex-col gap-20">
            <BlokOperations />
            <BlokTransactions />
        </div>
    </div>
  )
}

export default BlokDashboard