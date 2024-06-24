import React from 'react'
import TheNavbar from '../components/TheNavbar'
import { Outlet } from 'react-router-dom'

export default function Main() {
    return (
        <>
            <div>
                <TheNavbar />
                <div className='px-[50px]'>
                <Outlet />
                </div>
            </div>
        </>
    )
}
