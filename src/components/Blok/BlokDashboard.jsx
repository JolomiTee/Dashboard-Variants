import React from 'react'
import BlokAssetOverview from './sub components/BlokAssetOverview'
import BlokAnalytics from './sub components/BlokAnalytics'
import BlokOperations from './sub components/BlokOperations'
import BlokTransactions from './sub components/BlokTransactions'

const BlokDashboard = () => {
  return (
    <div className='flex gap-20'>
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