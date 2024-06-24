import React from 'react'

export default function VendorNavbar() {
    return (
        <>
            <div className='h-[180px] bg-[#995DD5] flex justify-between items-center px-[88px] text-white'>
                <div className='cursor-pointer mt-4'>
                    <span className='font-bold text-4xl'>Feed</span>
                    <span className='text-4xl'>kro</span>
                </div>
                <div className='flex justify-between items-center gap-20 cursor-pointer mt-4'>
                    <div className='text-lg'>Orders</div>
                    <div className='text-lg'>Customer</div>
                    <div className='text-lg'>Rider</div>
                    <div className='text-lg'>Partner</div>
                    <div className='text-lg'>Vendor</div>
                    <div className='text-lg'>Managemnet</div>
                    <div className='text-lg'><img className='h-8 w-8' src="/assets/images/navbar/navbar-1.png" alt="" /></div>
                </div>
            </div>

        </>
    )
}
