import React from 'react'
import QuickStatistics from '../components/quick-stats-section/QuickStatistics'
import TheTabs from '../components/tabs-section/TheTabs'

export default function VendorDashboard() {
    return (
        <>
            <div className=' mt-16 ml-[105px] text-theme-green text-2xl font-bold'>
                Vendor's Dashboard
            </div>

            <QuickStatistics />
            <TheTabs />

        </>
    )
}
