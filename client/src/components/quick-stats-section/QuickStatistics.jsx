import React, { useEffect, useState } from 'react'
import QuickStatsCard from './QuickStatsCard';

export default function QuickStatistics() {
    const [quickStats, setQuickStats] = useState([]);

    useEffect(() => {
        // Fetch data from the backend
        const fetchData = async () => {
            try {
                const response = await fetch("/quick-stats.json");
                const data = await response.json();
                setQuickStats(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <div className='ml-[105px] font-bold mt-16 mb-8 text-xl'>
                Quick Stats
            </div>
            <div className="ml-[105px]">
                <div className='flex gap-6'>
                    {quickStats.map((data) => (
                        <QuickStatsCard key={data._id} data={data} />
                    ))}
                </div>
            </div>
        </>
    )
}
