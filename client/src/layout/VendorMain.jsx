import React from 'react'
import { Outlet } from 'react-router-dom'
import VendorNavbar from '../components/VendorNavbar'
import TheNavbar from '../components/TheNavbar'

export default function VendorMain() {
    return (
        <>
            <div>
                {/* <VendorNavbar /> */}
                <TheNavbar />
                <div className='px-[50px]'>
                <Outlet />
                </div>
            </div>
        </>
    )
}
