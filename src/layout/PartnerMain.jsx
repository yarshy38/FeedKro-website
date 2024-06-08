import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import TheNavbar from '../components/TheNavbar'

export default function PartnerMain() {
    return (
        <>
            <div>
                {/* <Navbar /> */}
                <TheNavbar />
                <div className='px-[50px]'>
                <Outlet />
                </div>
            </div>
        </>
    )
}
