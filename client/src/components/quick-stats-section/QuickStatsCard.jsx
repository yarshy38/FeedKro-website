import React from 'react'

export default function QuickStatsCard({ data }) {

    return (
        <>
            <div className='bg-white p-4 px-6 rounded-xl shadow-lg w-[193px] h-[101px]'>
                <h5 className="text-md font-bold">{data.title}</h5>
                <p className={`text-3xl font-extrabold mt-1`} style={{ color: data.color }}>{data.statistic}</p>
            </div>
        </>
    )
}
